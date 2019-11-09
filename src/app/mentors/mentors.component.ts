import { Component, OnInit } from "@angular/core";

interface Mentor {
  id: number;
  name: string;
  background: string;
  photoUrl: string;
  linkedinUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  cvUrl?: string;
}

@Component({
  selector: "app-mentors",
  templateUrl: "./mentors.component.html",
  styleUrls: ["./mentors.component.css"]
})
export class MentorsComponent implements OnInit {
  mentors: Mentor[] = [];
  responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() {}

  ngOnInit() {
    this.mentors = [
      {
        id: 1,
        name: "Олья Пыхова",
        background: "Участник программ FLEX и U.S. - CAEF",
        photoUrl: "olya_pykhova.png",
        facebookUrl: "https://www.facebook.com/olya.pyhova"
      },
      {
        id: 2,
        name: "Максат Алымкулов",
        background: "Аудитор в KPMG",
        photoUrl: "maksat_alymbek.png",
        facebookUrl: "https://www.facebook.com/maksat.alymkulov.3/",
        linkedinUrl: "http://linkedin.com/in/maksat-alymkulov-132458120"
      },
      {
        id: 3,
        name: "Эльдос Мукашов",
        background: "Основатель собственного ювелирного магазина",
        photoUrl: "eldos_makshov.jpg",
        facebookUrl: "https://www.facebook.com/eldos.mukashov"
      },
      {
        id: 4,
        name: "Дастан Бекешбеков",
        background: "Менеджер по продажам в Namba Media",
        photoUrl: "dastan_bekeshbekov.jpg",
        facebookUrl: "https://www.facebook.com/dastan.keneshbekov"
      },
      {
        id: 5,
        name: "Алтынай Мелисова",
        background: "Аналитика в Lincoln University",
        photoUrl: "altynai_melisova.jpg",
        facebookUrl: "https://www.facebook.com/altynai.melisova.3"
      },
      {
        id: 6,
        name: "Дима Ким",
        background: 'Иллюзионист в шоу фокусников “Great Magic"',
        photoUrl: "dima_kim.png",
        instagramUrl: "https://www.instagram.com/focus.kg/",
        facebookUrl: "https://www.facebook.com/Kimd1997"
      },

      {
        id: 7,
        name: "Жаныбек Акматов",
        background: "Посланник Целей устойчивого развития ООН",
        photoUrl: "zhanybek_akhmatov.jpg",
        facebookUrl: "https://www.facebook.com/profile.php?id=100007349145997"
      },
      {
        id: 8,
        name: "Чолпон Абдырахманова",
        background: "Маркетолог в NTT Ltd",
        photoUrl: "cholpon_abdy.jpg",
        linkedinUrl: "www.linkedin.com/in/abdyrakhmanova",
        facebookUrl: "https://www.facebook.com/abdyrakhman"
      },
      {
        id: 9,
        name: "Кайрат Талантбеков",
        background: "Программист-фрилансер",
        photoUrl: "kairat_talantbekov.jpg",
        facebookUrl: "https://www.facebook.com/talantbekovk"
      },
      {
        id: 10,
        name: "Жылдыз Омурсакова",
        background: 'Маркетолог в ОсОO "Green Light"',
        photoUrl: "jyldyz_omursakova.jpg",
        linkedinUrl: "https://www.linkedin.com/in/zhyldyz-omursakova/",
        facebookUrl: "https://www.facebook.com/jyldyz.omursakova.5"
      },
      {
        id: 11,
        name: "Эрлан Жапаров",
        background:
          'Координатор бизнес-инкубатора "На Пределе" и бизнес-ивента "ГраблиNight"',
        photoUrl: "erlan_zhaparov.png",
        facebookUrl: "https://www.facebook.com/ZhaparovErlan"
      },
      {
        id: 12,
        name: "Айдай Чекирова",
        background: "Журналист в финансово-информационном портале «Акчабар»",
        photoUrl: "aidai_chekirova.png",
        facebookUrl: "http://facebook.com/chekirova.aidai"
      },
      {
        id: 13,
        name: "Айдай Аманкулова",
        background: "Ассистент рекрутера по программе FLEX",
        photoUrl: "ayday_amankulova.jpg",
        facebookUrl: "https://www.facebook.com/ayday.amankulova"
      },
      {
        id: 14,
        name: "Канат Ногойбаев",
        background: 'Специалист по связям с общественностью и коммуникациям в “Coca Cola"',
        photoUrl: "kanat_nogoibaev.png",
        facebookUrl: "https://www.facebook.com/people/%D0%9A%D0%B0%D0%BD%D0%B0%D1%82-%D0%9D%D0%BE%D0%B3%D0%BE%D0%B9%D0%B1%D0%B0%D0%B5%D0%B2/100003951158429"
      },
      {
        id: 15,
        name: "Алтынай Толенова",
        background: 'Бухгалтер в филиале АО "Мазар"',
        photoUrl: "altynai_tolenova.jpg",
        facebookUrl: "https://www.facebook.com/altynai.tolenova"
      },
      {
        id: 16,
        name: "Надырбек Авазбеков",
        background: 'Работал в различных НПО и МПО в сфере экономики, социологии и экологии',
        photoUrl: "nadyrbek_avazbekov.jpg",
        facebookUrl: "https://www.facebook.com/profile.php?id=100011187522341"
      },
      {
        id: 17,
        name: "Алия Асанбекова",
        background: 'Специалист баз данных в “Coca Cola"',
        photoUrl: "aliya_asanbekove.jpg",
        linkedinUrl: "https://www.linkedin.com/in/aliya-asanbekova/",
        facebookUrl: "https://www.facebook.com/alice.mccalley.3"
      },
      {
        id: 18,
        name: "Тилекмат Джусупов",
        background: 'Ведет видео-продакшн и ивент проекты',
        photoUrl: "tilekmat_dzhusupov.jpg",
        facebookUrl: "https://www.facebook.com/tilek.dzhusupov"
      },
      {
        id: 19,
        name: "Гулиза Алмазбек",
        background: 'Специалист отдела маркетинга в “Coca Cola"',
        photoUrl: "guliza_almazbek.png",
        facebookUrl: "https://www.facebook.com/guliza.almazbekova"
      },
      {
        id: 20,
        name: "Айбек Аскарбеков",
        background: '”Master of human rights and democratization” в Centre for European Studies, Yerevan State University',
        photoUrl: "aibek_askarbekov.png",
        facebookUrl: "https://www.facebook.com/askarbekovaibek"
      },
      {
        id: 21,
        name: "Айжан Тагаева",
        background: 'Проектный менеджер в фонде “Лингва"',
        photoUrl: "aizhan_tagaeva.jpg",
        facebookUrl: "https://www.facebook.com/aizhan.tagaeva"
      },
      {
        id: 22,
        name: "Данияр Бапыев",
        background: 'Эндоваскулярный хирург (кардиохирург)',
        photoUrl: "daniyar_bapyev.jpg",
        facebookUrl: "https://www.facebook.com/bapyev"
      },
      {
        id: 23,
        name: "Айдем Бакетаева",
        background: 'Основатель образовательного центра “Восток - 5"',
        photoUrl: "aidem_bakitaeva.jpg"
      }
    ];
  }
}
