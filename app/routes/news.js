import Ember from 'ember';

export default Ember.Route.extend({
    model(){
   return fetch('http://wordpress.dev.skynix.co/wp-json/wp/v2/news')
   .then( function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      } 
      return response.json();
    })
    .then(function(data) {  
        return data;
      })
      .catch(function(err){
        console.log(err);
      })
}
});
