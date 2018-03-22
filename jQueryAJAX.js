let fbtoken;
$(document).ready(()=>{
    fbtoken = prompt("enter fb token");
    getDetails();
});

let getDetails = function(){
    
    $.ajax({
        type: 'GET',
    dataType: 'json',   
        async:true,
        url:'https://graph.facebook.com/me?fields=id,name,picture,cover,feed&access_token=' + fbtoken,

        success : (response) =>{
            $('mainsec').css('display','block');
            console.log(response);
            $('.fbUserName').append(response.name);
            $('.fbUserPic').html('<img src="' + response.picture.data.url + '"class="img"/>');
            $('.fbUserFeed').append(response.feed);
            for (x of response.feed.data){
                if(x.story){
                    $('.story2').append(x.story + ' ' + "</br>");
                    $('.time2').append(x.created_time + ' ' + '</br>');
                    $('.dataid2').append(x.id + ' ' + '</br>');
                } 
            }
        }
    });
}