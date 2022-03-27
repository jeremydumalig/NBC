$("#quote-gen").click(function(){

  var gen = Math.floor(Math.random() * (12-1)+1)
      if (gen === 1) {
          document.getElementById("quote1").innerHTML = "We are, you might say, 'brainwashed' into thinking that money is the source of <br>happiness while what we really need to know is that inner peace is <br>something that comes from within.<br><span class='blue'>-5/11/18</span>";
          document.getElementById("quote2").innerHTML = "We are, you might say, 'brainwashed' into thinking that money is the source of <br>happiness while what we really need to know is that inner peace is <br>something that comes from within.<br><span class='blue'>-5/11/18</span>";
      } else if (gen === 2) {
          document.getElementById("quote1").innerHTML = "Not only is it the case that happy people are more willing to help others, but as <br>I generally point out, helping others is the best way to help yourself, <br>the best way to promote your own happiness. It is you, <br>yourself, who will receive the benefit.<br><span class='blue'>-11/13/17</span>";
          document.getElementById("quote2").innerHTML = "Not only is it the case that happy people are more willing to help others, but as <br>I generally point out, helping others is the best way to help yourself, <br>the best way to promote your own happiness. It is you, <br>yourself, who will receive the benefit.<br><span class='blue'>-11/13/17</span>";
      } else if (gen ===3) {
          document.getElementById("quote1").innerHTML = "Our real enemies and the enemies of humanity are negative emotions like anger and <br>hatred.  Indeed, people who are dominated by powerful negative emotions <br>should be objects of our compassion.<br><span class='blue'>-4/2/18</span>";
          document.getElementById("quote2").innerHTML = "Our real enemies and the enemies of humanity are negative emotions like anger and <br>hatred.  Indeed, people who are dominated by powerful negative emotions <br>should be objects of our compassion.<br><span class='blue'>-4/2/18</span>";
      } else if (gen ===4) {
          document.getElementById("quote1").innerHTML = "The many factors which divide us are actually much more superficial than those <br>we share. Despite all of the things that differentiate us – race, language, <br>religion, gender, wealth and so on – we are all equal <br>concerning our fundamental humanity.<br><span class='blue'>-3/19/18</span>";
          document.getElementById("quote2").innerHTML = "The many factors which divide us are actually much more superficial than those <br>we share. Despite all of the things that differentiate us – race, language, <br>religion, gender, wealth and so on – we are all equal <br>concerning our fundamental humanity.<br><span class='blue'>-3/19/18</span>";
      } else if (gen ===5) {
          document.getElementById("quote1").innerHTML = "I am convinced we can become happier individuals, happier communities and a happier <br>humanity by cultivating a warm heart, allowing our better selves to prevail.<br><span class='blue'>-12/29/17</span>";
          document.getElementById("quote2").innerHTML = "I am convinced we can become happier individuals, happier communities and a happier <br>humanity by cultivating a warm heart, allowing our better selves to prevail.<br><span class='blue'>-12/29/17</span>";
      } else if (gen ===6) {
          document.getElementById("quote1").innerHTML = "I often ask myself what is the purpose of our lives and I conclude that life's <br>purpose is to be happy. We have no guarantee what will happen in the <br>future, but we live in hope. That's what keeps us going.<br><span class='blue'>-5/7/18</span>";
          document.getElementById("quote2").innerHTML = "I often ask myself what is the purpose of our lives and I conclude that life's <br>purpose is to be happy. We have no guarantee what will happen in the <br>future, but we live in hope. That's what keeps us going.<br><span class='blue'>-5/7/18</span>";
      } else if (gen ===7) {
          document.getElementById("quote1").innerHTML = "Change in the world comes from individuals, from the inner peace in individual <br>hearts. Just as ripples spread out when a single pebble is dropped into <br>water, the actions of individuals can have far-reaching effects.<br><span class='blue'>-3/30/18</span>";
          document.getElementById("quote2").innerHTML = "Change in the world comes from individuals, from the inner peace in individual <br>hearts. Just as ripples spread out when a single pebble is dropped into <br>water, the actions of individuals can have far-reaching effects.<br><span class='blue'>-3/30/18</span>";
      } else if (gen ===8) {
          document.getElementById("quote1").innerHTML = "Peace is not brought about through conflict, but through compassion—creating peace <br>of mind within ourselves. We all need compassion and women can take a <br>lead role in encouraging others to let it flower within them. <br>My own first teacher of kindness and compassion was my mother.<br><span class='blue'>-12/4/17</span>";
          document.getElementById("quote2").innerHTML = "Peace is not brought about through conflict, but through compassion—creating peace <br>of mind within ourselves. We all need compassion and women can take a <br>lead role in encouraging others to let it flower within them. <br>My own first teacher of kindness and compassion was my mother.<br><span class='blue'>-12/4/17</span>";
      } else if (gen ===9) {
          document.getElementById("quote1").innerHTML = "I consider non-violence to be compassion in action. It doesn’t mean weakness, cowering <br>in fear, or simply doing nothing. It is to act without violence, <br>motivated by compassion, recognizing the rights of others.<br><span class='blue'>-12/15/17</span>";
          document.getElementById("quote2").innerHTML = "I consider non-violence to be compassion in action. It doesn’t mean weakness, cowering <br>in fear, or simply doing nothing. It is to act without violence, <br>motivated by compassion, recognizing the rights of others.<br><span class='blue'>-12/15/17</span>";
      } else if (gen ===10) {
          document.getElementById("quote1").innerHTML = "Modern education pays little attention to inner values and yet our basic human nature is <br>compassionate. We need to incorporate compassion and warm-heartedness <br>into the modern education system to make it more holistic.<br><span class='blue'>-1/15/18</span>";
          document.getElementById("quote2").innerHTML = "Modern education pays little attention to inner values and yet our basic human nature is <br>compassionate. We need to incorporate compassion and warm-heartedness <br>into the modern education system to make it more holistic.<br><span class='blue'>-1/15/18</span>";
      } else {
          document.getElementById("quote1").innerHTML = "What’s past is past, nothing can change that. But the future can be different if we choose <br>to make it so. We have to cultivate a vision of a happier, more peaceful <br>future and make the effort now to bring it about. This <br>is no time for complacency, hope lies in the action we take.<br><span class='blue'>-1/22/18</span>";
          document.getElementById("quote2").innerHTML = "What’s past is past, nothing can change that. But the future can be different if we choose <br>to make it so. We have to cultivate a vision of a happier, more peaceful <br>future and make the effort now to bring it about. This <br>is no time for complacency, hope lies in the action we take.<br><span class='blue'>-1/22/18</span>";
      }

});

$('#dalailama').click(function(){

  var num = Math.floor(Math.random() * (12-1)+1)
      if (num === 1) {
          $('#dalailama').attr('src','../img/dalailama1.jpg');
      } else if (num === 2) {
          $('#dalailama').attr('src','../img/dalailama2.jpg');
      } else if (num === 3) {
          $('#dalailama').attr('src','../img/dalailama3.jpg');
      } else if (num === 4) {
          $('#dalailama').attr('src','../img/dalailama4.jpg');
      } else if (num === 5) {
          $('#dalailama').attr('src','../img/dalailama5.jpg');
      } else if (num === 6) {
          $('#dalailama').attr('src','../img/dalailama6.jpg');
      } else if (num === 7) {
          $('#dalailama').attr('src','../img/dalailama7.jpg');
      } else if (num === 8) {
          $('#dalailama').attr('src','../img/dalailama8.jpg');
      } else if (num === 9) {
          $('#dalailama').attr('src','../img/dalailama9.jpg');
      } else if (num === 10) {
          $('#dalailama').attr('src','../img/dalailama10.jpg');
      } else {
          $('#dalailama').attr('src','../img/dalailama11.jpg');
      }
});
