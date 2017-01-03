$(document).ready(function(event){
   $('#submit').click(getData);

   $('#inputText').keyup(function(e){
      if( e.which == 13 ) {
          getData();
      }
   });
});
function getData(){
     $.getJSON('https://api.vid.me/channel/' + $('#inputText').val() + '', function(data){
         
         var avatar = data.avatar;
            var Username = data.username;
            var followers = data.followers;
            var totalViews = data.video_views;
            var ID = data.user_id

         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid red">'+
                     '<h1><span class="label label-success">' + Username + '</h1>'+
                     '<br /><b><span class="label label-success">Followers:' + followers + '</b>'+
                     '<br /><b><span class="label label-success">Total Views:' + totalViews + '</b>'+
                     '<br /><b><span class="label label-info"><font color="White"><a href="https://vid.me/' + Username + '">vid.me/'+ Username +'</a></font></b>'+
                     '<br /><b><span class="label label-danger">ID:' + ID + '</b>'+;
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A Vid.me user with that name does not exist.';
             $('.profile').html(html);
            return;
      });
}

