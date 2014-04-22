
app.controller("maincontroller",function $parent($scope,Pagination,$http){





$http({
    method: 'GET',
    // url: 'http://api.openweathermap.org/data/2.5/weather?q=Rabat,ma',

    // http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK

    
    // responseType:'json'
    url: 'recitor.json'
  }).success(function(data, status) {
    // Now we have a list of the stories (data.list.story)
    // in the data object that the NPR API 
    // returns in JSON that looks like:
    // data: { "list": {
    //   "title": ...
    //   "story": [
    //     { "id": ...
    //       "title": ...



    // $scope.namestation=data.name;







// set up source coran

$scope.urlmain="http://www.mp3recitation.com/";







$scope.iddupost=0;
$scope.idretenue=null;
$scope.predicate="a la base";
$scope.toshow=null;
$scope.recitor='joe';

$scope.mp3="http://users.skynet.be/fa046054/home/P22/track49.mp3";
$scope.pagination = Pagination.getNew(12);

$scope.reciteur=data;
$scope.coco=false;
$scope.actualid=null;

$scope.setcoco=function($newid){


if($scope.actualid==$newid){


            if($scope.coco==true){$scope.coco=false;


            $scope.actualid=$newid;

                        }

                        else{

                            $scope.coco=true;
                            $scope.$actualid=$newid;


                        }



}else{



                            $scope.coco=true;
                            $scope.actualid=$newid;







}


            



};



$scope.pagination.numPages = Math.ceil($scope.reciteur.length/$scope.pagination.perPage);


$scope.onretientlid=function($lid){

     $scope.idretenue=$lid;
     $scope.souratestodisplay=[];


     if($scope.reciteur[$lid].complet=="oui"){

        for (var i=0;i<114;i++)


        { $scope.souratestodisplay.push(i);
            // console.log($scope.souratestodisplay);

        }
       
     }else{



        if($scope.reciteur[$lid].fork=="peu"){



            for (counter=0;counter<$scope.reciteur[$lid].souratefork.length;counter++){

                var i=$scope.reciteur[$lid].souratefork[counter];

//ce qu on trouve on liste
                $scope.souratestodisplay.push(i-1);

               
            }



        }else{


            for (var i=0;i<114;i++){

                     var jo=$scope.reciteur[$lid].souratefork.indexOf(i+1)

            console.log("inarray"+jo);


                    if(jo == -1){

//ce qu on trouve on ne liste pas
                       
                      $scope.souratestodisplay.push(i);    
                        


                    }else{


                    continue;                    


                    }




             }






           

        }








     }
     

};

$scope.nomsura=[

                    {
                            id:1,
                            name:"سورة الفاتحة",
                            file:"001.mp3",
                            summery:" سورة مكية ، آياتها 7",
                            nom:"Al-Fatihah",
                            ayat:7
                        },
                        {
                            id:2,
                            name:"سورة البقرة",
                            file:"002.mp3",
                            summery:"سورة مدنية ، آياتها 286",
                            nom:" Al-Baqarah",
                            ayat:286

                        },
                        {
                            id:3,
                            name:"سورة آل عمران",
                            file:"003.mp3",
                            summery:"سورة مدنية ، آياتها 200 ",
                            nom:"'Ali `Imran",
                            ayat:200
                        }
                            ,
                        {
                            id:4,
                            name:"النساء",
                            file:"004.mp3",
                            summery:"سورة مدنية ، آياتها 176",
                            nom:"An-Nisa'",
                            ayat:176
                        }
                            ,
                        {
                            id:5,
                            name:"سورة المائدة",
                            file:"005.mp3",
                            summery:"سورة مدنية ، آياتها 120",
                            nom:"Al-Ma'idah",
                            ayat:120
                        },
                        {
                            id:6,
                            name:" سورة الأنعام",
                            file:"006.mp3",
                            summery:" سورة مكية ، آياتها 165",
                            nom:"Al-'An`am",
                            ayat:165
                        },
                        {
                            id:7,
                            name:"سورة الأعراف",
                            file:"007.mp3",                            
                            summery:"سورة مكية ، آياتها 206",
                            nom:"Al-'A`raf",
                            ayat:206
                        },
                        {
                            id:8,
                            name:"سورة الأنفال",
                            file:"008.mp3",
                            summery:"سورة مدنية ، آياتها 75",
                            nom:"Al-'Anfal",
                            ayat:75
                        },
                        {
                            id:9,
                            name:"سورة التوبة",
                            file:"009.mp3",
                            summery:"سورة مدنية ، آياتها 129",
                            nom:"'At-Tawbah",
                            ayat:129
                        },
                        {
                            id:10,
                            name:"سورة يونس",
                            file:"010.mp3",
                            ummery:"سورة مكية ، آياتها 109",
                            nom:"Yunus",
                            ayat:109
                        },
                        {
                            id:11,
                            name:"سورة هود",
                            file:"011.mp3",
                            summery:"سورة مكية ، آياتها 123",
                            nom:"Hud",
                            ayat:123
                        },
                        {
                            id:12,
                            name:" سورة يوسف",
                            file:"012.mp3",
                            summery:"سورة مكية ، آياتها 111",
                            nom:"Yusuf",
                            ayat:111
                        },
                        {
                            id:13,
                            name:"سورة الرعد",
                            file:"013.mp3",
                            summery:"سورة مدنية ، آياتها 43",
                            nom:"Ar-Ra`d",
                            ayat:43
                        },
                        {
                            id:14,
                            name:"سورة إبراهيم",
                            file:"014.mp3",
                            summery:"سورة مكية ، آياتها 52",
                            nom:" 'Ibrahim",
                            ayat:52
                        },
                        {
                            id:15,
                            name:"سورة الحجر",
                            file:"015.mp3",
                            summery:"سورة مكية ، آياتها 99",
                            nom:"Al-Hijr",
                            ayat:99
                        },
                        {
                            id:16,
                            name:"سورة النحل",
                            file:"016.mp3",
                            summery:"سورة مكية ، آياتها 128",
                            nom:"An-Nahl",
                            ayat:128
                        },
                        {
                            id:17,
                            name:"سورة الإسراء",
                            file:"017.mp3",
                            summery:"سورة مكية ، آياتها 111",
                            nom:"Al-'Isra'",
                            ayat:111
                        },
                        {
                            id:18,
                            name:"سورة الكهف",
                            file:"018.mp3",
                            summery:"سورة مكية ، آياتها 110",
                            nom:"Al-Kahf",
                            ayat:110
                        },
                        {
                            id:19,
                            name:"سورة مريم",
                            file:"019.mp3",
                            summery:" سورة مكية ، آياتها 98",
                            nom:"Maryam",
                            ayat:98
                        },
                        {
                            id:20,
                            name:"سورة طه",
                            file:"020.mp3",
                            summery:"سورة مكية ، آياتها 135",
                            nom:"Taha",
                            ayat:135
                        },
                        {
                            id:21,
                            name:"سورة الأنبياء",
                            file:"021.mp3",
                            summery:"سورة مكية ، آياتها 112",
                            nom:"Al-'Anbya'",
                            ayat:112
                        },
                        {
                            id:22,
                            name:"سورة الحج",
                            file:"022.mp3",
                            summery:" سورة مدنية ، آياتها 78",
                            nom:"Al-Haj",
                            ayat:78
                        },
                        {
                            id:23,
                            name:" سورة المؤمنون",
                            file:"023.mp3",
                            summery:" سورة مكية ، آياتها 118",
                            nom:"Al-Mu'minun",
                            ayat:118
                        },
                        {
                            id:24,
                            name:"سورة النور",
                            file:"024.mp3",
                            summery:" سورة مدنية ، آياتها 64",
                            nom:"An-Nur",
                            ayat:64
                        },
                        {
                            id:25,
                            name:" سورة الفرقان",
                            file:"025.mp3",
                            summery:"سورة مكية ، آياتها 77",
                            nom:"Al-Furqan",
                            ayat:200
                        },
                        {
                            id:26,
                            name:"سورة الشعراء",
                            file:"026.mp3",
                            summery:"سورة مكية ، آياتها 227",
                            nom:"Ash-Shu`ara'",
                            ayat:227
                        },
                        {
                            id:27,
                            name:"سورة النمل",
                            file:"027.mp3",
                            summery:"سورة مكية ، آياتها 93",
                            nom:"An-Naml",
                            ayat:93
                        },
                        {
                            id:28,
                            name:"سورة القصص",
                            file:"028.mp3",
                            summery:"سورة مكية ، آياتها 88",
                            nom:"Al-Qasas",
                            ayat:88
                        },
                        {
                            id:29,
                            name:" سورة العنكبوت",
                            file:"029.mp3",
                            summery:"سورة مكية ، آياتها 69",
                            nom:"Al-`Ankabut",
                            ayat:69
                        },
                        {
                            id:30,
                            name:"سورة الروم",
                            file:"030.mp3",
                            summery:" سورة مكية ، آياتها 60",
                            nom:"Ar-Rum",
                            ayat:60
                        },
                        {
                            id:31,
                            name:" سورة لقمان",
                            file:"031.mp3",
                            summery:"سورة مكية ، آياتها 34",
                            nom:"Luqman",
                            ayat:34
                        },
                        {
                            id:32,
                            name:"سورة السجدة",
                            file:"032.mp3",
                            summery:"سورة مكية ، آياتها 30",
                            nom:"As-Sajdah",
                            ayat:30
                        },
                        {
                            id:33,
                            name:" سورة الأحزاب",
                            file:"033.mp3",
                            summery:"سورة مدنية ، آياتها 73",
                            nom:"Al-'Ahzab",
                            ayat:73
                        },
                        {
                            id:34,
                            name:"سورة سبأ",
                            file:"034.mp3",
                            summery:"سورة مكية ، آياتها 54",
                            nom:"Saba'",
                            ayat:54
                        },
                        {
                            id:35,
                            name:"سورة فاطر",
                            file:"035.mp3",
                            summery:"سورة مكية ، آياتها 45",
                            nom:"Fatir",
                            ayat:45
                        },
                        {
                            id:36,
                            name:"سورة يس",
                            file:"036.mp3",
                            summery:"سورة مكية ، آياتها 83",
                            nom:"Ya-Sin",
                            ayat:83
                        },
                        {
                            id:37,
                            name:"سورة الصافات",
                            file:"037.mp3",
                            summery:"سورة مكية ، آياتها 182",
                            nom:"As-Saffat",
                            ayat:182
                        },
                        {
                            id:38,
                            name:"سورة ص",
                            file:"038.mp3",
                            summery:"سورة مكية ، آياتها 88",
                            nom:"Sad",
                            ayat:88
                        },
                        {
                            id:39,
                            name:" سورة الزمر",
                            file:"039.mp3",
                            summery:"سورة مكية ، آياتها 75",
                            nom:"Az-Zumar",
                            ayat:75
                        },
                        {
                            id:40,
                            name:" سورة غافر",
                            file:"040.mp3",
                            summery:"سورة مكية ، آياتها 85",
                            nom:"Ghafir",
                            ayat:85
                        },
                        {
                            id:41,
                            name:"سورة فصلت",
                            file:"041.mp3",
                            summery:" سورة مكية ، آياتها 54",
                            nom:"Fussilat",
                            ayat:54
                        },
                        {
                            id:42,
                            name:"سورة الشورى",
                            file:"042.mp3",
                            summery:"سورة مكية ، آياتها 53",
                            nom:"Ash-Shuraa",
                            ayat:53
                        },
                        {
                            id:43,
                            name:"سورة الزخرف",
                            file:"043.mp3",
                            summery:" سورة مكية ، آياتها 89",
                            nom:"Az-Zukhruf",
                            ayat:89
                        },
                        {
                            id:44,
                            name:"سورة الدخان",
                            file:"044.mp3",
                            summery:"سورة مكية ، آياتها 59",
                            nom:"Ad-Dukhan",
                            ayat:59
                        },
                        {
                            id:45,
                            name:" سورة الجاثية",
                            file:"045.mp3",
                            summery:" سورة مكية ، آياتها 37",
                            nom:"Al-Jathiyah",
                            ayat:37
                        },
                        {
                            id:46,
                            name:"سورة الأحقاف",
                            file:"046.mp3",
                            summery:"سورة مكية ، آياتها 35",
                            nom:"Al-'Ahqaf",
                            ayat:35
                        },
                        {
                            id:47,
                            name:"سورة محمد",
                            file:"047.mp3",
                            summery:"سورة مدنية ، آياتها 38",
                            nom:"Muhammad",
                            ayat:38
                        },
                        {
                            id:48,
                            name:" سورة الفتح",
                            file:"048.mp3",
                            summery:"سورة مدنية ، آياتها 29",
                            nom:"Al-Fath",
                            ayat:29
                        },
                        {
                            id:49,
                            name:"سورة الحجرات",
                            file:"049.mp3",
                            summery:"سورة مدنية ، آياتها 18",
                            nom:"Al-Hujurat",
                            ayat:18
                        },
                        {
                            id:50,
                            name:"سورة ق",
                            file:"050.mp3",
                            summery:"سورة مكية ، آياتها 45",
                            nom:"Qaf",
                            ayat:45
                        },
                        {
                            id:51,
                            name:"سورة الذاريات",
                            file:"051.mp3",
                            summery:"سورة مكية ، آياتها 60",
                            nom:"Adh-Dhariyat",
                            ayat:60
                        },
                        {
                            id:52,
                            name:"سورة الطور",
                            file:"052.mp3",
                            summery:"سورة مكية ، آياتها 49",
                            nom:"At-Tur",
                            ayat:49
                        },
                        {
                            id:53,
                            name:"سورة النجم",
                            file:"053.mp3",
                            summery:"سورة مكية ، آياتها 62",
                            nom:"An-Najm",
                            ayat:62
                        },
                        {
                            id:54,
                            name:" سورة القمر",
                            file:"054.mp3",
                            summery:"سورة مكية ، آياتها 55",
                            nom:"Al-Qamar",
                            ayat:55
                        },
                        {
                            id:55,
                            name:"سورة الرحمن",
                            file:"055.mp3",
                            summery:"سورة مدنية ، آياتها 78",
                            nom:"Ar-Rahman",
                            ayat:78
                        },
                        {
                            id:56,
                            name:" سورة الواقعة",
                            file:"056.mp3",
                            summery:"سورة مكية ، آياتها 96",
                            nom:"Al-Waqi`ah",
                            ayat:96
                        },
                        {
                            id:57,
                            name:"سورة الحديد",
                            file:"057.mp3",
                            summery:"سورة مدنية ، آياتها 29",
                            nom:"Al-Hadid",
                            ayat:29
                        },
                        {
                            id:58,
                            name:"سورة المجادلة",
                            file:"058.mp3",
                            summery:"سورة مدنية ، آياتها 22",
                            nom:"Al-Mujadila",
                            ayat:22
                        },
                        {
                            id:59,
                            name:"سورة الحشر",
                            file:"059.mp3",
                            summery:"سورة مدنية ، آياتها 24",
                            nom:"Al-Hashr",
                            ayat:24
                        },
                        {
                            id:60,
                            name:"سورة الممتحنة",
                            file:"060.mp3",
                            summery:" سورة مدنية ، آياتها 13",
                            nom:"Al-Mumtahanah",
                            ayat:13
                        },
                        {
                            id:61,
                            name:"سورة الصف",
                            file:"061.mp3",
                            summery:"سورة مدنية ، آياتها 14",
                            nom:"As-Saf",
                            ayat:14
                        },
                        {
                            id:62,
                            name:"سورة الجمعة",
                            file:"062.mp3",
                            summery:"سورة مدنية ، آياتها 11",
                            nom:"Al-Jumu`ah",
                            ayat:11
                        },
                        {
                            id:63,
                            name:"سورة المنافقون",
                            file:"063.mp3",
                            summery:"سورة مدنية ، آياتها 11",
                            nom:"Al-Munafiqun",
                            ayat:11
                        },
                        {
                            id:64,
                            name:"سورة التغابن",
                            file:"064.mp3",
                            summery:"سورة مدنية ، آياتها 18",
                            nom:"At-Taghabun",
                            ayat:18
                        },
                        {
                            id:65,
                            name:"سورة الطلاق",
                            file:"065.mp3",
                            summery:"سورة مدنية ، آياتها 12",
                            nom:"At-Talaq",
                            ayat:12
                        },
                        {
                            id:66,
                            name:"سورة التحريم",
                            file:"066.mp3",
                            summery:"سورة مدنية ، آياتها 12",
                            nom:"At-Tahrim",
                            ayat:12
                        },
                        {
                            id:67,
                            name:"سورة الملك",
                            file:"067.mp3",
                            summery:"سورة مكية ، آياتها 30",
                            nom:"Al-Mulk",
                            ayat:30
                        },
                        {
                            id:68,
                            name:"سورة القلم",
                            file:"068.mp3",
                            summery:"سورة مكية ، آياتها 52",
                            nom:"Al-Qalam",
                            ayat:52
                        },
                        {
                            id:69,
                            name:"سورة الحاقة",
                            file:"069.mp3",
                            summery:"سورة مكية ، آياتها 52",
                            nom:"Al-Haqqah",
                            ayat:52
                        },
                        {
                            id:70,
                            name:"سورة المعارج",
                            file:"070.mp3",
                            summery:"سورة مكية ، آياتها 44",
                            nom:"Al-Ma`arij",
                            ayat:44
                        },
                        {
                            id:71,
                            name:"سورة نوح",
                            file:"071.mp3",
                            summery:"سورة مكية ، آياتها 28",
                            nom:"Nuh",
                            ayat:28
                        },
                        {
                            id:72,
                            name:"سورة الجن",
                            file:"072.mp3",
                            summery:" سورة مكية ، آياتها 28",
                            nom:"Al-Jinn",
                            ayat:28
                        },
                        {
                            id:73,
                            name:"سورة المزمل",
                            file:"073.mp3",
                            summery:" سورة مكية ، آياتها 20",
                            nom:"Al-Muzzammil",
                            ayat:20
                        },
                        {
                            id:74,
                            name:"سورة المدثر",
                            file:"074.mp3",
                            summery:"سورة مكية ، آياتها 56",
                            nom:"Al-Muddaththir",
                            ayat:56
                        },
                        {
                            id:75,
                            name:" سورة القيامة",
                            file:"075.mp3",
                            summery:"سورة مكية ، آياتها 40",
                            nom:"Al-Qiyamah",
                            ayat:40
                        },
                        {
                            id:76,
                            name:"سورة الإنسان",
                            file:"076.mp3",
                            summery:"سورة مدنية ، آياتها 31",
                            nom:"Al-'Insan",
                            ayat:31
                        },
                        {
                            id:77,
                            name:"سورة المرسلات",
                            file:"077.mp3",
                            summery:"سورة مكية ، آياتها 50",
                            nom:"Al-Mursalat",
                            ayat:50
                        },
                        {
                            id:78,
                            name:"سورة النبأ",
                            file:"078.mp3",
                            summery:"سورة مكية ، آياتها 40",
                            nom:"An-Naba'",
                            ayat:40
                        },
                        {
                            id:79,
                            name:"سورة النازعات",
                            file:"079.mp3",
                            summery:"سورة مكية ، آياتها 46",
                            nom:"An-Nazi`at",
                            ayat:46
                        },
                        {
                            id:80,
                            name:" سورة عبس",
                            file:"080.mp3",
                            summery:"سورة مكية ، آياتها 42",
                            nom:"Abasa",
                            ayat:42
                        },
                        {
                            id:81,
                            name:"سورة التكوير",
                            file:"081.mp3",
                            summery:"سورة مكية ، آياتها 29",
                            nom:"At-Takwir",
                            ayat:29
                        },
                        {
                            id:82,
                            name:"سورة الانفطار",
                            file:"082.mp3",
                            summery:"سورة مكية ، آياتها 19",
                            nom:"Al-'Infitar",
                            ayat:19
                        },
                        {
                            id:83,
                            name:"سورة المطففين",
                            file:"083.mp3",
                            summery:"سورة مكية ، آياتها 36",
                            nom:"Al-Mutaffifin",
                            ayat:36
                        },
                        {
                            id:84,
                            name:"سورة الانشقاق",
                            file:"084.mp3",
                            summery:"سورة مكية ، آياتها 25",
                            nom:"Al-'Inshiqaq",
                            ayat:25
                        },
                        {
                            id:85,
                            name:"سورة البروج",
                            file:"085.mp3",
                            summery:"سورة مكية ، آياتها 22",
                            nom:"Al-Buruj",
                            ayat:22
                        },
                        {
                            id:86,
                            name:"سورة الطارق",
                            file:"086.mp3",
                            summery:"سورة مكية ، آياتها 17",
                            nom:"At-Tariq",
                            ayat:17
                        },
                        {
                            id:87,
                            name:"سورة الأعلى",
                            file:"087.mp3",
                            summery:"سورة مكية ، آياتها 19",
                            nom:"Al-'A`la",
                            ayat:19
                        },
                        {
                            id:88,
                            name:"سورة الغاشية",
                            file:"088.mp3",
                            summery:"سورة مكية ، آياتها 26",
                            nom:"Al-Ghashiyah",
                            ayat:26
                        },
                        {
                            id:89,
                            name:"سورة الفجر",
                            file:"089.mp3",
                            summery:"سورة مكية ، آياتها 30",
                            nom:"Al-Fajr",
                            ayat:30
                        },
                        {
                            id:90,
                            name:"سورة البلد",
                            file:"090.mp3",
                            summery:"سورة مكية ، آياتها 20",
                            nom:"Al-Balad",
                            ayat:20
                        },
                        {
                            id:91,
                            name:"سورة الشمس",
                            file:"091.mp3",
                            summery:"سورة مكية ، آياتها 15",
                            nom:"Ash-Shams",
                            ayat:15
                        },
                        {
                            id:92,
                            name:" سورة الليل",
                            file:"092.mp3",
                            summery:"سورة مكية ، آياتها 21",
                            nom:"Al-Layl",
                            ayat:21
                        },
                        {
                            id:93,
                            name:"سورة الضحى",
                            file:"093.mp3",
                            summery:"سورة مكية ، آياتها 11",
                            nom:"Ad-Duhaa",
                            ayat:11
                        },
                        {
                            id:94,
                            name:" سورة الشرح",
                            file:"094.mp3",
                            summery:"سورة مكية ، آياتها 8",
                            nom:"Ash-Sharh",
                            ayat:8
                        },
                        {
                            id:95,
                            name:"سورة التين",
                            file:"095.mp3",
                            summery:"سورة مكية ، آياتها 8",
                            nom:"At-Tin",
                            ayat:8
                        },
                        {
                            id:96,
                            name:"سورة العلق",
                            file:"096.mp3",
                            summery:"سورة مكية ، آياتها 19",
                            nom:"Al-`Alaq",
                            ayat:19
                        },
                        {
                            id:97,
                            name:"سورة القدر",
                            file:"097.mp3",
                            summery:"سورة مكية ، آياتها 5",
                            nom:"Al-Qadr",
                            ayat:5
                        },
                        {
                            id:98,
                            name:"سورة البينة",
                            file:"098.mp3",
                            summery:"سورة مدنية ، آياتها 8",
                            nom:"Al-Bayyinah",
                            ayat:8
                        },
                        {
                            id:99,
                            name:"سورة الزلزلة",
                            file:"099.mp3",
                            summery:"سورة مدنية ، آياتها 8",
                            nom:"Az-Zalzalah",
                            ayat:8
                        },
                        {
                            id:100,
                            name:" سورة العاديات",
                            file:"100.mp3",
                            summery:"سورة مكية ، آياتها 11",
                            nom:"Al-`Adiyat",
                            ayat:11
                        },
                        {
                            id:101,
                            name:" سورة القارعة",
                            file:"101.mp3",
                            summery:"سورة مكية ، آياتها 11",
                            nom:"Al-Qari`ah",
                            ayat:11
                        },
                        {
                            id:102,
                            name:"سورة التكاثر",
                            file:"102.mp3",
                            summery:" سورة مكية ، آياتها 8",
                            nom:"At-Takathur",
                            ayat:8
                        },
                        {
                            id:103,
                            name:"سورة العصر",
                            file:"103.mp3",
                            summery:"سورة مكية ، آياتها 3",
                            nom:"Al-`Asr",
                            ayat:3
                        },
                        {
                            id:104,
                            name:"سورة الهمزة",
                            file:"104.mp3",
                            summery:"سورة مكية ، آياتها 9",
                            nom:"Al-Humazah",
                            ayat:9
                        },
                        {
                            id:105,
                            name:" سورة الفيل",
                            file:"105.mp3",
                            summery:"سورة مكية ، آياتها 5",
                            nom:"Al-Fil",
                            ayat:5
                        },
                        {
                            id:106,
                            name:"سورة قريش",
                            file:"106.mp3",
                            summery:"سورة مكية ، آياتها 4",
                            nom:"Quraysh",
                            ayat:4
                        },
                        {
                            id:107,
                            name:" سورة الماعون",
                            file:"107.mp3",
                            summery:"سورة مكية ، آياتها 7",
                            nom:"Al-Ma`un",
                            ayat:7
                        },
                        {
                            id:108,
                            name:"سورة الكوثر",
                            file:"108.mp3",
                            summery:"سورة مكية ، آياتها 3",
                            nom:"Al-Kawthar",
                            ayat:3
                        },
                        {
                            id:109,
                            name:"سورة الكافرون",
                            file:"109.mp3",
                            summery:"سورة مكية ، آياتها 6",
                            nom:"Al-Kafirun",
                            ayat:6
                        },
                        {
                            id:110,
                            name:"سورة النصر",
                            file:"110.mp3",
                            summery:"سورة مدنية ، آياتها 3",
                            nom:"An-Nasr",
                            ayat:3
                        },
                        {
                            id:111,
                            name:"سورة المسد",
                            file:"111.mp3",
                            summery:"سورة مكية ، آياتها 5",
                            nom:"Al-Masad",
                            ayat:5
                        },
                        {
                            id:112,
                            name:"سورة الإخلاص",
                            file:"112.mp3",
                            summery:" سورة مكية ، آياتها 4",
                            nom:"Al-'Ikhlas",
                            ayat:4
                        },
                        {
                            id:113,
                            name:"سورة الفلق",
                            file:"113.mp3",
                            summery:"سورة مكية ، آياتها 5",
                            nom:"Al-Falaq",
                            ayat:5
                        },
                        {
                            id:114,
                            name:"سورة الناس",
                            file:"114.mp3",
                            summery:"سورة مكية ، آياتها 6",
                            nom:"An-Nas",
                            ayat:6
                        }





];

$scope.dansplayer=[];



$scope.ondeletesura=function($lido){




    for(var i = $scope.dansplayer.length - 1; i >= 0; i--){

console.log($scope.dansplayer[i].lido)

    if($scope.dansplayer[i].lido == $lido){
        $scope.dansplayer.splice(i,1);
    }
}    
   
};





$(document).ready(function(){

   var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        

    ], {
        playlistOptions: {
      enableRemoveControls: true
    },
        swfPath: "js",
        supplied: "mp3",
        wmode: "window",
        solution: "flash",
    });

    $("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_1")});



 



$scope.onaddsura=function($idsoure,$lename,$recitux,$leslug,$filesoura){
    
    $scope.iddupost ++;
    
    // $scope.dansplayer.push({lido:$scope.iddupost,id:$idsoure,name:$lename,recitateur:$recitux});

     myPlaylist.add({
      title:$lename,
      artist:$recitux,
      free:true,
      mp3:$scope.urlmain.concat($leslug,'/',$filesoura)
    
    });
    
};
});




































  

  }).error(function(data, status) {




    // Some error occurred
$scope.stocks = d;

  });










});




app.controller("recit",function($scope){





});



 