$(document).ready(function(event){
   $('#submit').click(getData);

   $('#inputText').keyup(function(e){
      if( e.which == 13 ) {
          getData();
      }
   });
});
function getData(){
     $.getJSON('https://benbotfn.tk/api/v1/cosmetics/br/' + $('#inputText').val() + '', function(data){
         
         var avatar = data.icons.icon;
            var Username = data.name;
            var followers = data.followers;
            var totalViews = data.Description;
            var ID = data.id;
            var rarity = data.rarity;

         var html = '<center><img src="' + avatar + '"width="100px" height="100px" style="border:3px solid red">'+
                     '<h1><span class="label label-success">Skin: ' + Username + '</h1>'+
                     '<br /><b><span class="label label-success">Followers:' + followers + '</b>'+
                     '<br /><b><span class="label label-success">Total Views:' + totalViews + '</b>'+
                     '<br /><b><span class="label label-info">Rarity:' + rarity+ '</b>'+
                     '<br /><b><span class="label label-danger">ID:' + ID + '</b>'+;
         $('.profile').html(html);
      }).fail(function(data){
            html = '<h1>A  fortnite cid with that name does not exist.';
             $('.profile').html(html);
            return;
      });
}

