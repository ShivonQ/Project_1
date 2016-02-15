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
    this.precipitation_type=" Rain ";
    this.is_a_storm=false;

    //Windspeed and direction
    this.windspeed=0.00;
    this.wind_direction="A Direction";

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
Date_Information.prototype.Set_Precipitation=function(amount, type){
    this.precipitation=parseFloat(amount).toFixed(2);
    this.precipitation_type=type;
    if (this.precipitation>=6){
        this.is_a_storm=true;
    }

};
Date_Information.prototype.Add_Information=function(string_of_input){
  this.simple_information_to_display.push(string_of_input);
    this.simple_information_to_display.save();
};
