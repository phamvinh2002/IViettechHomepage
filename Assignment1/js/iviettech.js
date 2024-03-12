
$(document).ready(function() {

    // Code cho phần banner
    // chạy từ động sau 5s
    // thoigian = setInterval ( function(){
    //     $('.next').trigger('click');
    // },5000);
// Viết code cho button next
    $('.next').click(function(event) {
        // đặt biến cho class sau class active
        var sau = $('.active').next();
        // xử lý phần nút
        var hientai = $('.here').index() + 1;
        $('.button ul li').removeClass('here');
        if (hientai == $('.button ul li').length){
            hientai = 0;
        };
        $('.button ul li:nth-child('+(hientai+1)+')').addClass('here');
        // Kiểm tra điều kiện sau active có còn thẻ nào nữa k
        if (sau.length == 0) {
            // add chuyển động chạy ra ngoài của thẻ chứa class active. sau khi animation chạy xong, xóa chuyển động
            $('.active').addClass('sangtrai').one('webkitAnimationEnd', function(event){
                $('.sangtrai').removeClass('sangtrai');
            });
            // quay lại thẻ đâu tiên sau đó add chuyển động từ ngoài vào. sau khi xong animation thêm class active vào thẻ hiện tại và xóa cd
            $('.slide_image ._1slide:first-child').addClass('phaidivao').one('webkitAnimationEnd', function(event){
                $('.active').removeClass('active');
                $('.phaidivao').addClass('active').removeClass('phaidivao');
            });
        }
        else {
            // add chuyển động chạy ra ngoài của thẻ chứa class active. sau khi animation chạy xong, xóa chuyển động
            $('.active').addClass('sangtrai').one('webkitAnimationEnd', function(event){
                $('.sangtrai').removeClass('sangtrai');
            });
            // thẻ sau thẻ active add chuyển động từ ngoài vào. sau khi xong animation thêm class active vào thẻ hiện tại và xóa cd
            sau.addClass('phaidivao').one('webkitAnimationEnd', function(event){
                $('.active').removeClass('active');
                $('.phaidivao').addClass('active').removeClass('phaidivao');
            });
        }
    });
    $('.pre').click(function(event) {
        var truoc = $('.active').prev();
        var hientai = $('.here').index() + 1;
        $('.button ul li').removeClass('here');
        if (hientai == 1){
            hientai = $('.button ul li').length+1;
        };
        $('.button ul li:nth-child('+(hientai-1)+')').addClass('here');
        if (truoc.length == 0) {
            $('.active').addClass('sangphai').one('webkitAnimationEnd', function(event){
                $('.sangphai').removeClass('sangphai');
            });
            $('.slide_image ._1slide:last-child').addClass('traidivao').one('webkitAnimationEnd', function(event){
                $('.active').removeClass('active');
                $('.traidivao').addClass('active').removeClass('traidivao');
            });
        }
        else {
            $('.active').addClass('sangphai').one('webkitAnimationEnd', function(event){
                $('.sangphai').removeClass('sangphai');
            });
            truoc.addClass('traidivao').one('webkitAnimationEnd', function(event){
                $('.active').removeClass('active');
                $('.traidivao').addClass('active').removeClass('traidivao');
            });
        }
    });
    $('.button ul li').click(function(event) {
        var vitri = $(this).index() + 1; //vị trí đang click chuột
        if (vitri != ($('.here').index() + 1)){
            // Xóa class here trên tất cả thẻ li
            $('.button ul li').removeClass('here');
            // nút dc click add class here
            $(this).addClass('here');
            $('.active').addClass('sangphai').one('webkitAnimationEnd', function(event){
                $('.sangphai').removeClass('sangphai');
            });
            $('.slide_image ._1slide:nth-child('+(vitri)+')').addClass('traidivao').one('webkitAnimationEnd', function(event){
                $('.active').removeClass('active');
                $('.traidivao').addClass('active').removeClass('traidivao');
            });
        }  
    }); 
    // code cho phần khóa học
    // Code cho nút bấm phần thiết kế
    $('.btn_right').click(function(event) {
        var pagenext = $('.show').next();
        if (pagenext.length == 0) {
            $('.show').addClass('sangtrai').one('webkitAnimationEnd', function(event) {
                $('.sangtrai').removeClass('sangtrai')
            });
            $('.develop .course-body:first-child').addClass('phaidivao').one('webkitAnimationEnd', function(event){
                $('.show').removeClass('show');
                $('.phaidivao').addClass('show').removeClass('phaidivao');
            });
        }
        else {
            $('.show').addClass('sangtrai').one('webkitAnimationEnd', function(event){
                $('.sangtrai').removeClass('sangtrai');
            });
            pagenext.addClass('phaidivao').one('webkitAnimationEnd', function(event){
                $('.show').removeClass('show');
                $('.phaidivao').addClass('show').removeClass('phaidivao');
            });
        }
    });
    $('.btn_left').click(function(event) {
        var pagepre = $('.show').prev();
        if (pagepre.length == 0) {
            $('.show').addClass('sangphai').one('webkitAnimationEnd', function(event) {
                $('.sangphai').removeClass('sangphai')
            });
            $('.develop .course-body:last-child').addClass('traidivao').one('webkitAnimationEnd', function(event){
                $('.show').removeClass('show');
                $('.traidivao').addClass('show').removeClass('traidivao');
            });
        }
        else {
            $('.show').addClass('sangphai').one('webkitAnimationEnd', function(event){
                $('.sangphai').removeClass('sangphai');
            });
            pagepre.addClass('traidivao').one('webkitAnimationEnd', function(event){
                $('.show').removeClass('show');
                $('.traidivao').addClass('show').removeClass('traidivao');
            });
        }
    });
    // Xử lí chuyên mục phần học
    $('.list_course ul li').click(function(event) {
        var place = $(this).index() + 1; //vị trí đang click chuột
        if (place != ($('.list_course .select').index() + 1)){
            // Xóa class here trên tất cả thẻ li
            $('.list_course ul li').removeClass('select');
            // nút dc click add class here
            $(this).addClass('select');
            $('.list_course .display').addClass('hide').one('webkitAnimationEnd', function(event){
                $('.list_course .hide').removeClass('hide');
            });
            // $('lession.index(place)').addClass('unhide').one('webkitAnimationEnd', function(event){
            //     $('.display').removeClass('display');
            //     $('.unhide').addClass('display').removeClass('unhide');
            //  });
            if (place == 1){
                $('.list_course .develop').addClass('unhide').one('webkitAnimationEnd', function(event){
                    $('.list_course .display').removeClass('display');
                    $('.list_course .unhide').addClass('display').removeClass('unhide');
                });
            }
            if (place == 2){
                $('.list_course .design').addClass('unhide').one('webkitAnimationEnd', function(event){
                    $('.list_course .display').removeClass('display');
                    $('.list_course .unhide').addClass('display').removeClass('unhide');
                });
            }
            if (place == 3){
                $('.list_course .advanced').addClass('unhide').one('webkitAnimationEnd', function(event){
                    $('.list_course .display').removeClass('display');
                    $('.list_course .unhide').addClass('display').removeClass('unhide');
                });
            }
            if (place == 4){
                $('.list_course .other').addClass('unhide').one('webkitAnimationEnd', function(event){
                    $('.list_course .display').removeClass('display');
                    $('.list_course .unhide').addClass('display').removeClass('unhide');
                });
            }    
        }  
    }); 
    // Xử lí chuyên mục lịch khai giảng
    $('.item_course ul li').click(function(event) {
        var site = $(this).index() + 1; //vị trí đang click chuột
        if (site != ($('.item_course .select').index() + 1)){
            // Xóa class here trên tất cả thẻ li
            $('.item_course ul li').removeClass('select');
            // nút dc click add class here
            $(this).addClass('select');
            $('.item_course .display').addClass('hide').one('webkitAnimationEnd', function(event){
                $('.item_course .hide').removeClass('hide');
            });
            $('.list_lession:nth-child('+(site)+')').addClass('unhide').one('webkitAnimationEnd', function(event){
                $('.item_course .display').removeClass('display');
                $('.item_course .unhide').addClass('display').removeClass('unhide');
             });  
        }
    }); 
    // xử lý nút cho phần feedback
    $('.feedback_content ul li').click(function(event) {
        var site = $(this).index() + 1; //vị trí đang click chuột
        if (site != ($('.feedback_content .here').index() + 1)){
            // Xóa class here trên tất cả thẻ li
            $('.feedback_content ul li').removeClass('here');
            // nút dc click add class here
            $(this).addClass('here');
            $('.feedback_content .display').addClass('hide').one('webkitAnimationEnd', function(event){
                $('.feedback_content .hide').removeClass('hide');
            });
            $('._1content:nth-child('+(site)+')').addClass('unhide').one('webkitAnimationEnd', function(event){
                $('.feedback_content .display').removeClass('display');
                $('.feedback_content .unhide').addClass('display').removeClass('unhide');
             });  
        }
    }); 
    // xử lý cho mobile menu
    $('#mobile_menu button').click (function(event){
        $('.menu').toggleClass('divao');
    })
});