
// Project Three - celebrity tweet generator

// need to create an object that will hold two arrays that each contain celebrity tweet objects

const tweetApp = {};

let name;

tweetApp.tweets = {
  inspirational: [
    { celebrity: "Oprah Winfrey",
      tweet: function(name){
      return `You get a Tweet, ${name} gets a Tweet, EVERYONE GETS A TWEET!!!!!!`;
      },
      handle: "@Oprah",
      url: "assets/oprah.jpg"
    },
    { celebrity: 'Dwayne Johnson',
      tweet: function(name){
      return `Do you smell what ${name} is cooking? I hope it's delicious`;
      },
      handle: "@TheRock",
      url: "assets/therock.jpg"
    },
    { celebrity: 'Ellen DeGeneres',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@TheEllenShow",
      url: "assets/ellen.jpg"
    },
    { celebrity: 'Barack Obama',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@BarackObama",
      url: "assets/obama.jpg"
    },
    { celebrity: 'Justin Bieber',
      tweet: function(name){
      return `HEY ${name}, let's chill by the fire while we're eating fondue.`;
      },
      handle: "@justinbieber",
      url: "assets/justin.jpg"
    }
  ],

  controversial: [
    { celebrity: 'Donald J. Trump',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@realDonaldTrump",
      url: "assets/trump.jpg"
    },
    { celebrity: 'Britney Spears',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@britneyspears",
      url: "assets/britney.jpg"
    },
    { celebrity: 'KANYE WEST',
      tweet: function(name){
      return `HEY ${name} THIS IS A TWEET`;
      },
      handle: "@kanyewest",
      url: "assets/kanye.jpg"
    },
    { celebrity: 'Mike The Situation',
      tweet: function(name){
      return `Gym, tan, laundry baby ... and ${name}, trust me, don't forget to pay your taxes.`;
      },
      handle: "@ItsTheSituation",
      url: "assets/situation.jpg"
    }
    // { celebrity: 'chrissy teigen',
    //   tweet: function(name){
    //   return `HEY ${name} THIS IS A TWEET`;
    //   },
    //   handle: "@chrissyteigen",
    //   url: "assets/chrissy.jpg"
    // },
    // { celebrity: 'simon',
    //   tweet: function(name){
    //   return `HEY ${name} THIS IS A TWEET`;
    //   },
    //   handle: "@simon",
    //   url: "assets/simon.jpg"
    // }
  ]
};

 // a function that generates a random number and then uses that random number to return an object (based on index number) within the array (randomly)

tweetApp.random = function(array){
  const number = Math.floor(Math.random() * array.length);
  return array[number];
}

tweetApp.months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];


tweetApp.submitQuestionOne = function(){
  // user comes to the site to enter the first question - their name 
  $('form').on('submit', function(event){
    // prevent the default behaviour of the form on submit
    event.preventDefault();
    //gets value/data from what the user types in as their name
    name = $('#name').val().trim();
    // after they enter their name, add the class of hide to the question
    $('.question-1').addClass("hide");
    $('.question-2').removeClass("hide");

    // clears the name/data from the name submit
    $('#name').val('');

    tweetApp.submitQuestionTwo();
  });
};


tweetApp.submitQuestionTwo = function(){
  $('.question-2').on('click', function(){
    //gets the user's pronoun from the radio button
    const pronoun = $('input[name=pronoun]:checked').val();
    $('.question-2').addClass('hide');
    $('.question-3').removeClass('hide');

    tweetApp.submitQuestionThree();
  });
};


tweetApp.submitQuestionThree = function(){
  $('.question-3').on('click', function(){

    //gets the user's tweet preference from the radio button (inspirational or controversial)
    const tweetPreference = $('input[name=tweet-style]:checked').val();
    $('.question-3').addClass('hide');
    $('.welcome').addClass('hide');
    $('.tweet-results').removeClass('hide');
    

    //create a variable to select the array that matches the user's tweet type choice
    const userArray = tweetApp.tweets[tweetPreference];
  
    // create a variable that will use the random function to narrow down the tweet options to one tweet
    const randomTweet = tweetApp.random(userArray);

    // create variables to store the random celebrity name and their tweet content
    const celebrityName = randomTweet.celebrity;
    const celebrityHandle = randomTweet.handle;
    const celebrityTweet = randomTweet.tweet(name);
    const celebrityPic = $('<img class="twitterPic">').attr('src', randomTweet.url);
    const celebrityVerify = $('<img>').attr('src', "assets/twittercheck.png");


    // when the responses are submitted, a random tweet is generated about the user (using their name); display that info on the page

    //celebrity picture
    $('.celeb-pic').append(celebrityPic);
    //name of the celeb
    $('.full-name').append(`<h3>${celebrityName}</h3>`);
    //blue verified check
    $('.full-name').append(celebrityVerify);
    //handle of the celeb
    $('.celeb-handle').append(`<h3>${celebrityHandle}</h3>`);
    //tweet content
    $('.tweet-body p').append(celebrityTweet);

    tweetApp.dateInfo();
    tweetApp.numberGenerator();
    });
  };

  tweetApp.dateInfo = function(){

    // use built-in methods to get the current date information for tweet
      const currentDateTime = new Date();
      // get the day
      const day = currentDateTime.getDate(); // getDate gives the day (between 1 and 31)
      // get the month
      const monthNumber = currentDateTime.getMonth(); // getMonth gives the month in a number (between 0 and 11)
      const monthWord = tweetApp.months[monthNumber]; // using the months array to get the name of the month
      // get the year
      const year = currentDateTime.getFullYear();
    
      // add the date info to the page
    $('.date h4').append(`${day} ${monthWord} ${year}`);
  }

  tweetApp.numberGenerator = function(){
    const retweets = Math.floor(Math.random() * 100 + 100);
    const likes = Math.floor(Math.random() * 1000 + 500);
    const comments = Math.floor(Math.random() * 100 + 50);
  
    $('.popularity .retweets').append(`${retweets} <span>Retweets</span>`);
    $('.popularity .likes').append(`${likes} <span>Likes</span>`);

    $('.comment h4').append(comments);
    $('.retweet h4').append(retweets);
    $('.heart h4').append(likes);

  }

tweetApp.init = function(){
  tweetApp.submitQuestionOne();
};




$(document).ready(function() {
  tweetApp.init();
});


// to do:
 // start styling and formatting the tweet and initial question
 // figure out how to display the tweet/make it appear
 // get pictures for each celeb (to match their twitter)

