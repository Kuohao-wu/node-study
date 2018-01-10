var http = require('http');
var cheerio = require('cheerio');
var fs = require('fs');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {
    var courseData = [];
    var $ = cheerio.load(html);
    var chapters = $('.chapter');

    // 分析要获取的数据结构
    // 	[{
    // 		chapterTitle:''
    // 		videos:[
    // 			{
    // 				title:''
    // // 			id:''
    // 			}
    // 		]
    // 	}]
    // }
    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos: []
        }
        videos.each(function (item) {
            var video = $(this);
            var videoTitle = video.find('.studyvideo').text();
            var videoId = video.find('.studyvideo').attr('href').split('video/')[1];
            chapterData.videos.push({
                title: videoTitle,
                id: videoId
            })

        });
        courseData.push(chapterData);
    })
    return courseData;
}

function printCourseData(courseData) {
    var str = '<ul>';
    courseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle;
        str += '<li>' + chapterTitle + '\n<ul>'

        item.videos.forEach(function (item) {
            str += '<li>【' + item.id + '】' + '--' + item.title + '</li>';
        })
        str += '</ul></li>'
    })
    str += '</ul>'
    fs.writeFile('imoocClass.html', str, {flag: 'w'}, function (err) {
        if (err) console.log(err);
        console.log('写入数据完成');
    });
}


http.get(url, function (res) {
    var html = '';

    res.on('data', function (data) {
        html += data;
    })
    res.on('end', function () {
        //过滤数据
        var courseData = filterChapters(html);
        //写入数据到文本
        printCourseData(courseData);
    });
	res.on('error', function () {
        console.log('获取课程数据出错');
    })
})




