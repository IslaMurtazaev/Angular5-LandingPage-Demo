import { Component, OnInit } from '@angular/core';

interface Mentor {
  id: number,
  name: string,
  background: string,
  photoUrl: string,
  linkedinUrl?: string,
  facebookUrl?: string,
  instagramUrl?: string,
  cvUrl?: string
}

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  mentors: Mentor[] = []
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor() { }

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
        facebookUrl: "https://www.facebook.com/maksat.alymkulov.3/"
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
        name: "Дима Ким",
        background: 'Иллюзионист в шоу фокусников “Great Magic"',
        photoUrl: "dima_kim.png",
        instagramUrl: "https://www.instagram.com/focus.kg/",
        facebookUrl: "https://www.facebook.com/Kimd1997"
      },
      {
        id: 6,
        name: "Айдай Чекирова",
        background: 'Журналист в финансово-информационном портале «Акчабар»',
        photoUrl: "aidai_chekirova.png",
        facebookUrl: "http://facebook.com/chekirova.aidai"
      },
    ]
  }

}
