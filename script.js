const fillers = {
    //name of the person
    person: ["brother", "friend", "commander", "partner", "homie", "helper", "sister", "dude", "partner in crime", "$person and $person"],

    //use to describe the person
    good_adjective: ["finest","best","greatest", "awesomest", "Amazing", "Wonderful", "$good_adjective and $good_adjective"],

    thing: ["business", "stuff", "news", "job", "opportunity", "chance", "occasion", "event", "activity"],

    //word to describe the enemy army.
    Bad: ["evil", "miscreant", "unrighteous", "villainous", "foul", "nefarious", "wicked", "depraved", "$Bad and &Bad"],

    item: ["plan", "project", "goal", "item", "program"],

    //The location name in the story is all create by me. For example, Gu is front name Wu is back name. together the full name of location is Guwu.
    //front name
    front:["Gu","Shu","Xian", "Oak", "Jose","Sto"],
    //back name
    back:["wu","don","Shan,", "land", "Francscio", "town"],

    //ready1 
    ready1:["the spaceship engine and army is ready for activation",
            "We're ready to deploy the reinforcements",
            "We can now to help our ally",
            "You are not alone, let us know when you need support",
            "It's time to stop them",
            "We shall alter the future and bring peace!",
            "It is our destiny to be victory!"],

    //ready2
    ready2:["the threat and the $Bad army must be eliminated!",
            "eliminating them and hostiles",
            "this will be their downfall",
            "the enemy will never know it will be their downfall",
            "our advance must continue",
            "whatever it takes",
            "fight, until we're victory! "],
  };
  
  const template = `I am always looking for you! My best $person. You are the world's $good_adjective. I got some good $thing for you! 

  Our ally had been attack by the $Bad army now, but somehow we still carry on and continue our $item. Now, we need your help to support our ally! 

  Our ally location is $front$back, a planets outside the galaxy! You will lead an army to help them! You are the only hope for our ally!

  Now! My best $person. $ready1 and $ready2, $ready2!
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;

    let grammar = tracery.createGrammar(spellbook);
    console.log(grammar.flatten('#origin#'))
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
