
// Define the `portfolioApp` module
var app = angular.module("app", []);

//define `yearController`
app.controller('yearController', function ($scope) {
$scope.date = new Date();
});

// Define the `portfolioController`
app.controller('portfolioController', function ($scope) {
  $scope.portfolioItems = [
    {
      title: 'Comb Design',
      subtitle: 'The Old Chinese Immortal',
      image_cover:'1.jpg',
      image_set: [['combDesign1.jpg', '/jpg/combDesign1.jpg', "Design"],['1.jpg', '/jpg/1.jpg', "Illustration"],['comb1.jpg', '/jpg/comb1.jpg', "Final Form"]],
      desc:"The image of this old character is based on the chinese immortal Tu Di Po(土地婆), the Earth Grandmother.In china, old people always get along well with kids. Tu Di Po is one of those very kind and amiable old women, and she is also the wife of the Earth God; therefore, most chinese people revere her. In addition, the long hair, in china, means experience of people, which give us a sense of wisdom. Most importantly, long grey hair needs to be combed everyday, so I use the image to create this comb in order to represent the Chinese tradition.",
      link:'no',
      link_class:'',
      link_txt:'',
    },
        {
      title: 'Searching for Utopia',
      subtitle: '1',
      image_cover:'4.jpg',
      image_set: [['4.jpg', '/jpg/4.jpg', "Illustration1"]],
      desc:"With the development of the city, we could see construction everywhere. As more and more sites were built, there was more noise and dust, which I could not bear.",
      link:'no',
      link_class:'',
      link_txt:'',
    },
       {
      title: 'Searching for Utopia',
      subtitle: '6',
      image_cover:'9.jpg',
      image_set: [['9.jpg', '/jpg/9.jpg', "llustration6"]],
      desc:"Then I went to the seaside and looked at the endless sea, which made me want to know what the sea floor was like. I let myself sink into the sea slowly, and found that there was a lovely quiet there.",
      link:'',
      link_class:'',
      link_txt:''
    },
        {
      title: 'Comb Design',
      subtitle: 'Traditional Chinese Woman',
      image_set:[['combDesign2.jpg', '/jpg/combDesign2.jpg', "Design"],['2.jpg', '/jpg/2.jpg', "Illustration"],['comb2.jpg', '/jpg/comb2.jpg', "Final Form"]],
      desc:"This character is based on traditional chinese women, who always have long hair. In ancient times, people in China often washed their hair in the river, the situation creates a beautiful exquisite conception. There are beauty, long hair, running water, tinny fish and lotus. What a beautiful painting! So I tried to draw it. Most importantly, I designed this comb, in order to represent that women should dress and make up everyday. Women is supposed to comb their hair like ancient times, and to make some fantastic bun. ",
      image_cover:'2.jpg',
      link:'no',
      link_class:'',
      link_txt:'',
    },
    {
      title: 'Searching for Utopia',
      subtitle: '2',
      image_cover:'5.jpg',
      image_set: [['5.jpg', '/jpg/5.jpg', "llustration2"]],
      desc:"So I decided to spend the weekend in a different environment. I packed my bag and planned to stay away from the hustle and the bustle of the city in order to find a moment of peace in nature.",
      link:'no',
      link_class:'',
      link_txt:'',
    },
         {
      title: 'Searching for Utopia',
      subtitle: '4',
      image_cover:'8.jpg',
      image_set: [['8.jpg', '/jpg/8.jpg', "llustration4"]],
      desc:"It was evening when I returned to my camp and I lit a fire. The flames flickered in the breeze and brought a warmth that reached into my heart. I closed my eyes and felt the beauty. ",
      link:'no',
      link_class:'',
      link_txt:'',
    },
  {
      title: 'Searching for Utopia',
      subtitle: '5',
      image_cover:'7.jpg',
      image_set: [['7.jpg', '/jpg/7.jpg', "llustration5"]],
      desc:"The next morning, I found a stream. I sat on the bank of the stream and watched it flow, but I felt time standing still at that moment.",
      link:'no',
      link_class:'',
      link_txt:'',
    },
   {
      title: 'Comb Design',
      subtitle: 'Blessed Baby',
      image_cover:'3.jpg',
      image_set: [['combDesign3.jpg', '/jpg/combDesign3.jpg', "Design"],['3.jpg', '/jpg/3.jpg', "Illustration"],['comb3.jpg', '/jpg/comb3.jpg', "Final Form"]],
      desc:"This is a traditional chinese doll, with a bun and a red belly. In addition, the painting is full of good fortune by using the chinese word ‘Fu’ (福). Because bun means age, status and other meanings, chinese people always wear their hair in different bun according to the traditional rules. So it is important for children to learn it, and the comb is the necessary tool.",
      link:'no',
      link_class:'',
      link_txt:'',
    },
 {
      title: 'Searching for Utopia',
      subtitle: '3',
      image_cover:'6.jpg',
      image_set: [['6.jpg', '/jpg/6.jpg', "llustration3"]],
      desc:"I wondered if sitting at the top of the hill and looking at the sunset would be the best way to relax. I tried. I found everything around me so beautiful, but it made me feel out of place because it did not put me in a wonderful mood.",
      link:'no',
      link_class:'',
      link_txt:'',
    },
    {
        title: 'Searching for Utopia',
        subtitle: '7',
        image_cover:'10.jpg',
        image_set: [['10.jpg', '/jpg/10.jpg', "llustration7"]],
        desc:"At night, I looked at the stars and wondered where my Utopia was. Where was the best place for me? Maybe if I changed my mindset, Utopia would be everywhere for me.",
        link:'no',
        link_class:'',
        link_txt:'',
      },
  ];
});
// End Angular Module

  /*///LIGHTBOX/////*/
  var userscroll;

//open lightbox
function expand_lb(clicked_el) {
    userscroll = document.documentElement.scrollTop;
    window.scrollTo(0, 0);   
  
  //add expand class
 var lb_el = clicked_el.nextElementSibling;
   if (lb_el.classList){
     lb_el.classList.add('expand'); 
   
   }else{
   lb_el.className += ' ' + 'expand';
 
   }

  
  //add container hide
  var container = document.querySelectorAll(".container");
[].forEach.call(container, function(el1) {
   if (container.classList)
  el1.classList.add('container-hide');
else
el1.className += ' ' + 'container-hide';
});  

 fn_load_portimgs(lb_el);
  };

  
//close lightbox
  function close_lb() {
  
   //remove expand class
  var lbs = document.querySelectorAll(".lightbox.expand");
[].forEach.call(lbs, function(el2) {
  el2.className = el2.className.replace(/\bexpand\b/, "");
});  
    
//remove container hide class
  var cont_hide = document.querySelectorAll(".container.container-hide");
[].forEach.call(cont_hide, function(el3) {
  el3.className = el3.className.replace(/\bcontainer-hide\b/, "");
});  
    
window.scrollTo(0, userscroll);

};

//call window scrolled function
window.onscroll = function(){
win_scroll();
};
 
function win_scroll() {
  var scroll_top = (document.documentElement && document.documentElement.scrollTop) || 
              document.body.scrollTop;
  var win_height = window.innerHeight;
  
  var skills = document.querySelectorAll('.skill-pic');
    for (i = 0; i < skills.length; i++) { 
      var top = skills[i].offsetTop
if (top < scroll_top + (win_height/1.5)){
    if (skills[i].classList)
  skills[i].classList.add('in-view');
else
  skills[i].className += ' ' + 'in-view'; 
}
    }

}

/*///DEFER LOAD///*/
function fn_load_portimgs(lb){
  var lb_con = lb.children[0];
  var lb_img = lb_con.children[1];
   var lb_a = lb_img.children;
  
  for (i = 0; i < lb_a.length; i++) { 
   var img = lb_a[i].children[0];
  img.setAttribute("src", img.getAttribute("defer-img"));
  }
}

/*///SMOOTH SCROLL///*/
initSmoothScrolling();
function initSmoothScrolling() {
  var duration = 400;

  var pageUrl = location.hash ?
      stripHash(location.href) :
      location.href;

  delegatedLinkHijacking();
  //directLinkHijacking();

  function delegatedLinkHijacking() {
    document.body.addEventListener('click', onClick, false);

    function onClick(e) {
      var target = e.target;
      if (!isInPageLink(target)) {
        var output = isInPageLinkRecurse(target);
        if(output != false) {
          target = output;
        } else {
          return;
        }

      }


      e.stopPropagation();
      e.preventDefault();

      jump(target.hash, {
        duration: duration,
        callback: function() {
          setFocus(target.hash);
        }
      });
    }
  }

  function directLinkHijacking() {
    [].slice.call(document.querySelectorAll('a'))
        .filter(isInPageLink)
        .forEach(function(a) {
          a.addEventListener('click', onClick, false);
        });

    function onClick(e) {
      e.stopPropagation();
      e.preventDefault();

      jump(e.target.hash, {
        duration: duration
      });
    }

  }

function isInPageLink(n) {
  return n && n.tagName.toLowerCase() === 'a' &&
      n.hash.length > 0 &&
      stripHash(n.href) === pageUrl;
}

  var count = 0;
  var isInPageLinkRecurse = function recurse (target) {
    var parent = target.parentElement;
    var linkFound = isInPageLink(parent);
    if (linkFound) {
      count = 0;
      return parent;
    } else if (count < 4){
      count++;
      return recurse(parent);
    } else {
      count = 0;
      return linkFound;
    }
  };

  function stripHash(url) {
    return url.slice(0, url.lastIndexOf('#'));
  }

  function isCssSmoothSCrollSupported() {
    return 'scrollBehavior' in document.documentElement.style;
  }

  // Adapted from:
  // https://www.nczonline.net/blog/2013/01/15/fixing-skip-to-content-links/
  function setFocus(hash) {
    var element = document.getElementById(hash.substring(1));

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1;
      }

      element.focus();
    }
  }

}

function jump(target, options) {
  var
      start = window.pageYOffset,
      opt = {
        duration: options.duration,
        offset: options.offset || 0,
        callback: options.callback,
        easing: options.easing || easeInOutQuad
      },
      distance = typeof target === 'string' ?
      opt.offset + document.querySelector(target).getBoundingClientRect().top :
          target,
      duration = typeof opt.duration === 'function' ?
          opt.duration(distance) :
          opt.duration,
      timeStart, timeElapsed;

  requestAnimationFrame(function(time) {
    timeStart = time;
    loop(time);
  });

  function loop(time) {
    timeElapsed = time - timeStart;

    window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration));

    if (timeElapsed < duration)
      requestAnimationFrame(loop);
    else
      end();
  }

  function end() {
    window.scrollTo(0, start + distance);

    if (typeof opt.callback === 'function')
      opt.callback();
  }

  // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b
  }

}