/*
 * Author : Suman Kunwar
 */
 var hydra = {
    login:function(username, password){

    },
    ajax: function(url, params, method) {
      var xRequest;
      if (window.XMLHttpRequest)
          {
             xRequest = new XMLHttpRequest();
          } else {
             xRequest = new ActiveXObject("Microsoft.XMLHTTP");
          }
      //Send the proper header information along with the request

        xRequest.onreadystatechange = function() {
           if ((xRequest.readyState == 4) && (xRequest.status == 200))
           {
                var respone = xRequest1.responseText;
                console.log("Response Text", respone);
           }
          };
        xRequest1.open(method, url, "true");
        xRequest1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xRequest1.send(data);
     },
     renderList:function(list, params){

     }
 }

 //
