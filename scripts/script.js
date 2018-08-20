
// Project Three - celebrity tweet generator

// need to create an object that will hold two arrays that each contain celebrity tweet objects

const tweetApp = {};

let name;

tweetApp.tweets = {
  inspirational: [
    { celebrity: "Oprah Winfrey",
      tweet: function(name){
      return `You get a Tweet, <span class="name-link">@${name}</span> gets a Tweet, EVERYONE GETS A TWEET!!!!!!`;
      },
      handle: "@Oprah",
      url: "assets/oprah.jpg"
    },
    { celebrity: 'Dwayne Johnson',
      tweet: function(name){
      return `Today is cheat day - got a fat stack of pancakes ready to go. Don't cheat yourself, treat yourself <span class="name-link">@${name}</span>.`;
      },
      handle: "@TheRock",
      url: "assets/therock.jpg"
    },
    { celebrity: 'Ellen DeGeneres',
      tweet: function(name){
      return `Hey <span class="name-link">@${name}</span>, why did Helvetica swipe left on Times New Roman? He wasn’t her type.`;
      },
      handle: "@TheEllenShow",
      url: "assets/ellen.jpg"
    },
    { celebrity: 'Barack Obama',
      tweet: function(name){
      return `Hello everyone, is this thing still on? I'm saying 'hello' to <span class="name-link">@${name}</span>, and also Joe Biden.  I miss Joe Biden.`;
      },
      handle: "@BarackObama",
      url: "assets/obama.jpg"
    },
    { celebrity: 'Justin Bieber',
      tweet: function(name){
      return `grateful 2 b alive - love u <span class="name-link">@${name}</span>. wake up every day and make it great.`;
      },
      handle: "@justinbieber",
      url: "assets/justin.jpg"
    }
  ],

  controversial: [
    { celebrity: 'Donald J. Trump',
      tweet: function(name){
      return `Can't believe <span class="name-link">@${name}</span> (more like STALKER) thinks that I would actually want to send them a Tweet. Sad! `;
      },
      handle: "@realDonaldTrump",
      url: "assets/trump.jpg"
    },
    { celebrity: 'Britney Spears',
      tweet: function(name){
      return `Does anyone think global warming is a good thing? I love <span class="name-link">@${name}</span>. I think they are a really interesting person.`;
      },
      handle: "@britneyspears",
      url: "assets/britney.jpg"
    },
    { celebrity: 'KANYE WEST',
      tweet: function(name){
      return `<span class="name-link">@${name}</span> has distratced me from my creative process`;
      },
      handle: "@kanyewest",
      url: "assets/kanye.jpg"
    },
    { celebrity: 'Mike The Situation',
      tweet: function(name){
      return `Gym, tan, laundry baby ... and <span class="name-link">@${name}</span>, trust me, don't forget to pay your taxes.`;
      },
      handle: "@ItsTheSituation",
      url: "assets/situation.jpg"
    },
    { celebrity: 'chrissy teigen',
      tweet: function(name){
      return `everyone is in agreement that our president is a human cheeto, right? do you agree <span class="name-link">@${name}</span>?`;
      },
      handle: "@chrissyteigen",
      url: "assets/chrissy.jpg"
    },
    { celebrity: 'amanda bynes',
      tweet: function(name){
      return `Hi <span class="name-link">@${name}</span> I want Drake to ..... nevermind`;
      },
      handle: "@amandabynes",
      url: "assets/amanda.jpg"
    }
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

tweetApp.begin = function(){
  $('button').on('click', function(){
  
    $('.start').addClass('hide').addClass('slideUp');
    $('.question-1').removeClass('hide').addClass("fadeIn");

    tweetApp.submitQuestionOne();
  
  });
};

tweetApp.submitQuestionOne = function(){
  // user answers the first question - their name 
  $('form').on('submit', function(event){
    // prevent the default behaviour of the form on submit
    event.preventDefault();
    //gets value/data from what the user types in as their name
    name = $('#name').val().trim();
    // after they enter their name, add the class of hide to the question
    $('.question-1').addClass("hide");
    $('.question-2').removeClass("hide");
    $('.question-2').addClass("fadeIn");

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
    $('.question-3').removeClass('hide').addClass('fadeIn');

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
    $('.twitter-bird-image').addClass('hide');
    $('.back-to-beginning').removeClass('hide');

    $('.back-to-beginning').on('click', function(){
      location.reload(true);
    });


    

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
  tweetApp.begin();
};


$(document).ready(function() {
  tweetApp.init();
});
