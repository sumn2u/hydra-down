/*
 * Author : Suman Kunwar
 */
 var hydra = {
    login:function(username, password){
      var data= JSON.stringify({ username: username, password:password });
      var response = this.ajax('/login', data ,'POST');
    },
    ajax: function(url, params, method) {
      var xRequest, response;
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
                response = xRequest1.responseText;
           }
          };
        xRequest1.open(method, url, "true");
        xRequest1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xRequest1.send(data);
        return response;
     },
     renderList:function(list, params){

     }
 }

 //
