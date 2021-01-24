$(function(){
    var links = {
        '耿美玉': {regexp:/耿美玉/g, baidu:'https://baike.baidu.com/item/耿美玉', wikipedia:'https://zh.wikipedia.org/wiki/耿美玉'},
        '饶毅': {regexp:/饶毅/g, baidu:'https://baike.baidu.com/item/饶毅', wikipedia:'https://zh.wikipedia.org/wiki/饶毅'},
        '曹雪涛': {regexp:/曹雪涛/g, baidu:'https://baike.baidu.com/item/曹雪涛', wikipedia:'https://zh.wikipedia.org/wiki/曹雪涛'},
        '李红良': {regexp:/李红良/g, baidu:'https://baike.baidu.com/item/李红良', wikipedia:'https://zh.wikipedia.org/wiki/李红良'},
        '裴钢': {regexp:/裴钢/g, baidu:'https://baike.baidu.com/item/裴钢', wikipedia:'https://zh.wikipedia.org/wiki/裴钢'},
    };
    elms = $('.content');
    elms.each(function(i){
        $.each(links,function(key,value){
            var txt = elms.eq(i).html();
            elms.eq(i).html(
              txt.replace(value['regexp'], ' <a href="' + value['baidu'] + '" target="_blank">' + key + '</a> ')
            );
        });
    });
});

$(function () {
  $('.donate').popover({
    html: true,
    container: 'body',
    content: function () {
        return '<img src="' + $(this).data('img') + '" class="donate-img">';
    },
    trigger: 'click'
  })
})
