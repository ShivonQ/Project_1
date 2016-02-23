/**
 * Created by School on 2/22/2016.
 */
var list_of_settlement_types={1:"Thorp",2:"Hamlet",3:"Village",4:"Small Town",5:"Large Town",6:"Small City",7:"Large City",8:"Metropolis"}
//since at the moment this class CANNOT take information since my whole world is already hardcoded I will just be doing the selection of capital cities and towns
var Settlement_Data=function(){
    this.name="";
    this.country_or_area="";

    this.population=0;
    this.money_limit=0;

    this.power_center_in_community="";
    this.power_center_alignement="";
    this.authority_figures=[];

    this.guardsmen=0;
    this.major_exports=[];
    this.major_imports=[];
    //TODO figure out how to tie an image here. Stick it in a pannable box.
    this.city_map=null;
};



