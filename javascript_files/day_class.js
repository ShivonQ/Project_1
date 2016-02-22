/**
 * Created by School on 2/15/2016.
 */
var arraylist_of_month_names = ["Bethal","Ablamar","Maros",'Apnee','Duril','Lovoth','Lamorick','Oreth','Welcar','Svana','Ponj','Quindahl','Rentar'];
var Date_Information = function(date_number, month_name){
    //this info is given, it's how they know where they belong in the final array of data
    this.date_number=date_number;
    this.month_name=month_name;

    //Moon Phase info, TODO GET THIS WORKING
    //this.moon_phase

    this.high_temprature=0.00;
    this.low_temprature=0.00;

    //Precipitation
    this.precipitation=0.00;
    this.precipitation_duration=0;
    this.precipitation_type=" None ";
    this.is_a_storm=false;

    //Windspeed and direction
    this.windspeed=0.00;
    this.wind_direction="None";

    this.simple_information_to_display=[];
};

Date_Information.prototype.Set_Temp=function(high,low){
    this.high_temprature=parseFloat(high).toFixed(2);
    this.low_temprature=parseFloat(low).toFixed(2);
};

Date_Information.prototype.Set_Wind=function(speed,direction){
  this.windspeed=parseFloat(speed).toFixed(2);
    this.wind_direction=direction;
};
Date_Information.prototype.Set_Precipitation=function(amount, type, duration){
    this.precipitation=parseFloat(amount).toFixed(2);
    this.precipitation_type=type;
    this.precipitation_duration=parseFloat(duration).toFixed(0);
    if (this.precipitation>=6){
        this.is_a_storm=true;
    }

};
Date_Information.prototype.Add_Information=function(string_of_input){
  this.simple_information_to_display.push(string_of_input);
    this.simple_information_to_display.save();
};
//No Precip, No Storm, so not declared

var ponj1=new  Date_Information(1,"Ponj");
var ponj2 = new Date_Information(2,"Ponj");
var ponj3 = new Date_Information(3,"Ponj");
var ponj4 = new Date_Information(4,"Ponj");
var ponj5 = new Date_Information(5,"Ponj");
var ponj6 = new Date_Information(6,"Ponj");
var ponj7 = new Date_Information(7,"Ponj");
var ponj8 = new Date_Information(8,"Ponj");
var ponj9 = new Date_Information(9,"Ponj");
var ponj10 = new Date_Information(10,"Ponj");
var ponj11 = new Date_Information(11,"Ponj");
var ponj12 = new Date_Information(12,"Ponj");
var ponj13 = new Date_Information(13,"Ponj");
var ponj14 = new Date_Information(14,"Ponj");
var ponj15 = new Date_Information(15,"Ponj");
var ponj16 = new Date_Information(16,"Ponj");
var ponj17 = new Date_Information(17,"Ponj");
var ponj18 = new Date_Information(18,"Ponj");
var ponj19 = new Date_Information(19,"Ponj");
var ponj20 = new Date_Information(20,"Ponj");
var ponj21 = new Date_Information(21,"Ponj");
var ponj22 = new Date_Information(22,"Ponj");
var ponj23 = new Date_Information(23,"Ponj");
var ponj24 = new Date_Information(24,"Ponj");
var ponj25 = new Date_Information(25,"Ponj");
var ponj26 = new Date_Information(26,"Ponj");
var ponj27 = new Date_Information(27,"Ponj");
var month_of_ponj={1:ponj1,2:ponj2,3:ponj3,4:ponj4,5:ponj5,6:ponj6,7:ponj7,8:ponj8,9:ponj9,10:ponj10,
    11:ponj11, 12:ponj12,13:ponj13,14:ponj14,15:ponj15,16:ponj16,17:ponj17,18:ponj18,19:ponj19,
    20:ponj20,21:ponj21, 22:ponj22, 23:ponj23,24:ponj24, 25:ponj25,26:ponj26,27:ponj27};

ponj1.high_temprature=57.5;
ponj1.low_temprature=42.4;
ponj1.windspeed=4;
ponj1.wind_direction="South East";
ponj1.simple_information_to_display=["Bazz the Kobold Arrives in Weston with Arayan RoughStepper. Gets room at The Oldest Stone Building."];
//
ponj2.high_temprature=50.5;
ponj2.low_temprature=38.4;
ponj2.windspeed=2;
ponj2.wind_direction="South";
ponj2.simple_information_to_display=["Bazz gets a temp job in the mine."];

ponj3.high_temprature=48.0;
ponj3.low_temprature=40.0;
ponj3.windspeed=4;
ponj3.precipitation=7;
ponj3.precipitation_type="Rain";
ponj3.precipitation_duration=2;
ponj3.wind_direction="South East";
ponj3.simple_information_to_display=["Nothing of Note"];

ponj4.high_temprature=52;
ponj4.low_temprature=43;
ponj4.windspeed=1;
ponj4.wind_direction="East";
ponj4.simple_information_to_display=["Nothing of Note"];

ponj5.high_temprature=43.0;
ponj5.low_temprature=32.0;
ponj5.windspeed=4;
ponj5.wind_direction="South East";
ponj5.simple_information_to_display=["Nothing of Note"];

ponj6.high_temprature=48.0;
ponj6.low_temprature=40.0;
ponj6.windspeed=4;
ponj6.precipitation=7;
ponj6.precipitation_type="Rain";
ponj6.precipitation_duration=2;
ponj6.wind_direction="South East";
ponj6.simple_information_to_display=["Nothing of Note"];

ponj7.high_temprature=41.0;
ponj7.low_temprature=23.0;
ponj7.windspeed=3;
ponj7.precipitation=7;
ponj7.precipitation_type="Freezing Rain";
ponj7.precipitation_duration=5;
ponj7.is_a_storm=true;
ponj7.wind_direction="South East";
ponj7.simple_information_to_display=["First Sleet Storm of Fall at 7pm.","Reports of growing numbers of crows in the fields from outlying farmers."];

ponj8.high_temprature=53.0;
ponj8.low_temprature=38.0;
ponj8.windspeed=5;
ponj8.wind_direction="South";
ponj8.simple_information_to_display=["Nothing of Note"];

ponj9.high_temprature=45.0;
ponj9.low_temprature=38.0;
ponj9.windspeed=0;
ponj9.simple_information_to_display=["Guardsman Beece stays late at the tavern, complaining of bad dreams. Offers to draw things for people."];

ponj10.high_temprature=44.0;
ponj10.low_temprature=37.0;
ponj10.windspeed=0;
ponj10.simple_information_to_display=[
    "Dumavil Cehris Gladdenstone arrives in town from Fallcrest, with Roondar her giant red panda companion.",
    "Cehris, Bazz, Seymour, and Kelvin meet eachother for real.",
    "Sithril Seranth the bard introduces herself.",
    "Guardsman Beece has a fit of some kind when Seymour confronts him about his freaky art, and runs out of the tavern."];

ponj11.high_temprature=48.0;
ponj11.low_temprature=42.0;
ponj11.windspeed=0;
ponj11.wind_direction="South East";
ponj11.simple_information_to_display=["The party are hired by Mar to clear out her warehouse of rats.",
    "Later the night the party realizes that Beece is missing.",
"Darinthrall Shann reports alarming amounts of crow activity.",
"Sherriff Raegalaine gets reports of three separate incidents where people were attacked by crows.",
    "The victims are sent to the Temple of Ehlonna under Halvards care."];

ponj12.high_temprature=41.0;
ponj12.low_temprature=32.0;
ponj12.windspeed=0;
ponj12.simple_information_to_display=["Party asks around after Beece, check with his family.  " +
"They say he used to be a painter before the Elsir War, and when they saved up enough money he had bought a studio to work from. " +
"They also say that for the last two weeks he has not been himself, barely sleeping, and complaining of nightmares.",
    "A swarm of dessicated crows attack the party.",
    "The party hears that a swarm of crows killed some people yesterday.",
    "The party finds Guardsman Beece in his art studio, in front of a large painting.  " +
    "He is a zombie and his heart has been removed. " +
    "His armor is not harmed in any way by this removal, but it is clear he was wearing it when it happened.",
    "Beece nearly kills Bazz.",
    "Afterwards the party follow Beeces tracks and blood spatters throughout the town.  " +
    "They lead into the woods on the South-West edge of the town, into the West Wood.",
    "They examine the painting he was standing in front of.",
    "THIS IS WHERE AN IMAGE OF THE PAINTING OF THE SCARY TREE WITH CROWS FOR LEAVES WOULD BE IF THIS WAS A DATABASE",
    "The party brings Beeces body to the Temple of Ehlonna and learn that the vicims of the crow attacks have become gravely ill.",
    "Their skin has become covered in tiny black feathers and small scaly patches of skin, suppurating fluid.","They recommend isolating the sick people, and request that Halvard cast 'Speak With Dead' on Beece tomorrow."];


ponj13.high_temprature=43.0;
ponj13.low_temprature=32.0;
ponj13.windspeed=0;
ponj13.wind_direction="None";
ponj13.simple_information_to_display=["Seymour, Kelvin, and Bazz have contracted the disease.",
    "The party sets off into the woods, following Beece's Trail from the previous day.",
    "They find a mysterious unnatural fog enshrouded area of the forest, all the trees in and near it appear to be dead and partially rotted..",
    "While moving towards it they are ambushed by cultists in spooky robes and crow masks.",
    "When slain the cultist bodies erupt in a swarm of dessicated sickly crows.",
    "They decide not to go further into the fog bank until they can rest from the battle.",
    "They head back into town to the temple of Ehlonna to 'speak' with Beece.",
    "Once there they learn that there have been an alarming number of attacks on people by swarms of crows since yesterday.",
    "They speak with Beece and learn a few bits of information. " +
    "Notably: Some tree he calls the 'Weeping Tree' is what he found in the woods and the 'wood woman' who lives in it took his heart. Literally.",
    "They conclude that the tree he spoke of must be beyond that unnatural fog bank."
];

ponj14.high_temprature=41.5;
ponj14.low_temprature=23.0;
ponj14.windspeed=17;
ponj14.precipitation=8;
ponj14.precipitation_type="Freezing Rain";
ponj14.precipitation_duration=8;
ponj14.is_a_storm=true;
ponj14.wind_direction="South";
ponj14.simple_information_to_display=["The party gets ready for their journey into the fog.",
    "They visit Lady Amelia NeMoren in NeMoren Manor and question her about the original curse on the town.",
    "Lizettes two brothers kidnapped her (Lady NeMoren) and brought her to the Icecaves on the road west of here where Lizette imprisoned her in ice.",
    "They head into the woods after this and return to the strange fog.",
    "They see that the fog and the dying trees have both advanced about a quarter mile.",
    "They are attacked again by cultist and kill them after some hard work.",
    "They keep moving deeper into the foggy, dead forest and come to a clearing.",
    "The Weeping Tree is in the center of a 120 diameter clearing of felled trees, rotten stumps, and bodies in various stages of decay.",

    "The Weeping Tree itself is festooned with shriveled black hearts of various animals and humanoids.",
    "The surface of the tree oozes black ichor from a wound in the trunk made by a gnarled vicious looking Longsword with a strange Sigil engraved on its blackened surface.",
    "The clearing is covered in a grey black slime mold emanating from the black ichor oozing from the tree in the center.",
    "The 'wood woman' Beece's corpse spoke of turns out to be a corrupted Dryad which is very tough to kill.",
    "When they are within 30 feet of the Weeping Tree it tries to impale their hearts on itself with magic.",
    "Its vile magic luckily fails to tear the hearts from any of them.",
    "They defeat the Corrupted Dryad after a long and very tough fight in which Kelvin becomes charmed by her.",
    "Kelvin pulls the longsword from the Weeping Tree, and the ooze stops flowing, the fog begins to clear and a shudder passes through the tree.",
    "All of the hearts on the tree fall off in a shriveled fleshy rain.",
    "They search the clearing finding two armored bodies amongst the other corpses.",
    "They are wearing engraved armor, with a squid sigil on the breastplate.  Their packs are stuffed with half rotted camping gear. Each of them has dogtags with some sort of serial code on them.",
    "There is also the armored body of a human child nearby. In similarly sigiled armor with some really useful equipment the party takes.",
    "'Who would put children into armor and send them into the woods!?' asked Cehris.",
    "They notice that a storm appears to be building and that the day is quite overcast.",
    "Roondar hears something and becomes a scared animal.",
    "It is an enourmous swarm of killer crows.",
    "The exhausted party runs back to town all through the night to return to town.",
    "The swarm is corraled by a huge crow shooting enourmous 80 foot arcs of lightning from its beak into the swarms.",
    "It then flies off with the enourmous swarm of crows chaing it.",
    "The sigil on the evil sword was the house Sigil of the Beln family, Lizettes famliy..."];

ponj15.high_temprature=53.0;
ponj15.low_temprature=38.0;
ponj15.windspeed=17;
ponj15.precipitation=7;
ponj15.wind_direction="South West";
ponj15.simple_information_to_display=["More to come"];

ponj16.high_temprature=40.0;
ponj16.low_temprature=24.0;
ponj16.windspeed=5;
ponj16.wind_direction="South West";
ponj16.simple_information_to_display=["More to come"];

ponj17.high_temprature=50.0;
ponj17.low_temprature=36.0;
ponj17.windspeed=9;
ponj17.wind_direction="West";
ponj17.simple_information_to_display=["The team prepares for the battle tomorrow."];

ponj18.high_temprature=41.0;
ponj18.low_temprature=30.0;
ponj18.windspeed=15;
ponj18.precipitation=3;
ponj18.precipitation_type="Snow";
ponj18.precipitation_duration=6;
ponj18.wind_direction="North West";
ponj18.simple_information_to_display=["First Sleet Storm of Fall at 7pm.","Reports of growing numbers of crows in the fields from outlying farmers."];




