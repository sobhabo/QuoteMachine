
function getQuote() {


  $.ajax( {
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
     success: function(response) {
      console.log(response);
       $(".text").text(response.quote);
       $(".author").text(response.author);

     },
    error: function(jqXHR,textStatus,errorThrown)
    {


    }

}
);
};



$(function()
{

getQuote();

$("button").click(getQuote);


}
);
