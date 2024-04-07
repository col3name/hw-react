import { Review } from "@/shared/types/types";
import { Cinema } from "@/redux/features/film/model";

export const cinemas: Cinema[] = [
  {
    id: "CTfrB5PGEJHBwxCNlU4uo",
    name: "Синема сад",
    movieIds: [
      "2aT976Fs_Bek0e2ZR_05V",
      "9t2dPgRBgWpmOXRXK5l4Q",
      "We79XlVI0Y-XshFxZD6Nv",
      "ab4FWj-OOXyskLN1jhHh5",
    ],
  },
  {
    id: "2a2976KdjBek0e2ZR_07V",
    name: "4 с половиной звезды",
    movieIds: [
      "CTzeB2PGEHHBwxCNlU4uo",
      "2aPkdUMEofGltdqb8vmIK",
      "o-awiIm3XOgh06o58ZLLg",
      "huLQW2WaeH-zLQO73EIZB",
    ],
  },
  {
    id: "4gJr8UOYvT7UuprciZ4iL",
    name: "Дружба",
    movieIds: [
      "5flr8UOuJz7UuputaZ9iL",
      "JzEzYyvYOAK2u7bd7IxPc",
      "2qtXtduRa5GHkfR5vB3Aw",
      "f-r-NQvL_QPYSlLARgGi7",
    ],
  },
];

export type FilmGenre = "fantasy" | "horror" | "action" | "comedy" | "";

type MovieId = string;
export interface Movie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: FilmGenre;
  id: MovieId;
  rating: number;
  director: string;
  reviewIds: string[];
}

export const movies: Movie[] = [
  {
    title: "Властелин колец: Братство Кольца",
    posterUrl: "https://i.postimg.cc/pdCLNMqX/1.webp",
    releaseYear: 2001,
    description:
      "Сказания о Средиземье — это хроника Великой войны за Кольцо, длившейся не одну тысячу лет. Тот, кто владел Кольцом, получал неограниченную власть, но был обязан служить злу.Тихая деревня, где живут хоббиты. Придя на 111-й день рождения к своему старому другу Бильбо Бэггинсу, волшебник Гэндальф начинает вести разговор о кольце, которое Бильбо нашел много лет назад. Это кольцо принадлежало когда-то темному властителю Средиземья Саурону, и оно дает большую власть своему обладателю. Теперь Саурон хочет вернуть себе власть над Средиземьем. Бильбо отдает Кольцо племяннику Фродо, чтобы тот отнёс его к Роковой Горе и уничтожил.",
    genre: "fantasy",
    id: "2aT976Fs_Bek0e2ZR_05V",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["M0bg9QY5gVtupNaglrmua", "w32kK5oV6UIr1ZHdkkMAn"],
  },
  {
    title: "Властелин колец: Две крепости",
    posterUrl: "https://i.postimg.cc/9MfFCgnP/2.webp",
    releaseYear: 2002,
    description:
      "Братство распалось, но Кольцо Всевластья должно быть уничтожено. Фродо и Сэм вынуждены довериться Голлуму, который взялся провести их к вратам Мордора. Громадная армия Сарумана приближается: члены братства и их союзники готовы принять бой. Битва за Средиземье продолжается.",
    genre: "fantasy",
    id: "CTzeB2PGEHHBwxCNlU4uo",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["yvLjlSo9w6T4Mp6gG22pc", "PnxKfx6XS_RqcIxC7w4a7"],
  },
  {
    title: "Властелин колец: Возвращение короля",
    posterUrl: "https://i.postimg.cc/FF8sXZgc/3.webp",
    releaseYear: 2003,
    description:
      "Повелитель сил тьмы Саурон направляет свою бесчисленную армию под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластья.",
    genre: "fantasy",
    id: "5flr8UOuJz7UuputaZ9iL",
    rating: 8,
    director: "Питер Джексон",
    reviewIds: ["sFpB1zc2RB1_06S9PMWj4", "sFpB1zc2RB1_06S9PMWj4"],
  },
  {
    title: "Оно",
    posterUrl: "https://i.postimg.cc/NfXGsHpn/image.webp",
    releaseYear: 2017,
    description:
      "Когда в городке Дерри штата Мэн начинают пропадать дети, несколько ребят сталкиваются со своими величайшими страхами - не только с группой школьных хулиганов, но со злобным клоуном Пеннивайзом, чьи проявления жестокости и список жертв уходят в глубь веков.",
    genre: "horror",
    id: "9t2dPgRBgWpmOXRXK5l4Q",
    rating: 8,
    director: "Андрес Мускетти",
    reviewIds: ["t8QHNLoec1QF1XFyObGk7", "-b9ezNy3oSoMpldgUl_IC"],
  },
  {
    title: "Оно 2",
    posterUrl: "https://i.postimg.cc/T3Xdp3s3/2.webp",
    releaseYear: 2019,
    description:
      "Проходит 27 лет после первой встречи ребят с демоническим Пеннивайзом. Они выросли, покинули родной городок и практически забыли о тех страшных событиях, но неожиданно в их взрослые проблемы вторгается телефонный звонок. Майк никогда не покидал Дерри и всё это время собирал информацию о жутком клоуне и ждал. Когда в городе начали происходить новые убийства, Майк просит старых друзей вновь собраться вместе и разобраться со злом города Дерри раз и навсегда.",
    genre: "horror",
    id: "2aPkdUMEofGltdqb8vmIK",
    rating: 8,
    director: "Андрес Мускетти",
    reviewIds: ["9wUCPgqmjqLOc0g-80Ioj", "Ryx3f_0VKXgb4qKbEYRqT"],
  },
  {
    title: "Чужой",
    posterUrl: "https://i.postimg.cc/dVmqdKMm/image.webp",
    releaseYear: 1979,
    description:
      "В далеком будущем возвращающийся на Землю грузовой космический корабль перехватывает исходящий с неизвестной планеты сигнал. Экипаж, в соответствии с основными инструкциями, обязан найти и исследовать источник сигнала. Оказавшись на планете, астронавты повсюду обнаруживают предметы, по виду напоминающие гигантские коконы.",
    genre: "horror",
    id: "JzEzYyvYOAK2u7bd7IxPc",
    rating: 8,
    director: "Ридли Скотт",
    reviewIds: ["sFpB1zc2RB1_06S9PMWj4", "OVPbCJzb8wOGfhJ54JbVc"],
  },
  {
    title: "Брат 2",
    posterUrl: "https://i.postimg.cc/fbDRgR7r/2.webp",
    releaseYear: 2000,
    description:
      "Участвуя в программе на телевидении, Данила Багров встречает своих друзей по службе в Чечне. Одного из них внезапно убивают. Выясняется, что у того были неприятности из-за брата-хоккеиста в Америке. Данила должен разобраться. Он вылетает в Америку и за компанию берёт с собой старшего брата.",
    genre: "action",
    id: "We79XlVI0Y-XshFxZD6Nv",
    rating: 8,
    director: "Алексей Балабанов",
    reviewIds: ["Ryx3f_0VKXgb4qKbEYRqT", "zb3Ui_Hmmy83OsUcS8y7W"],
  },
  {
    title: "Карты, деньги, два ствола",
    posterUrl: "https://i.postimg.cc/tTmRTdKK/image.webp",
    releaseYear: 1998,
    description:
      "Четверо молодых парней накопили каждый по 25 тысяч фунтов, чтобы один из них мог сыграть в карты с опытным шулером и матерым преступником, известным по кличке Гарри-Топор. Парень в итоге проиграл 500 тысяч, на уплату долга ему дали неделю.",
    genre: "action",
    id: "o-awiIm3XOgh06o58ZLLg",
    rating: 8,
    director: "Гай Ричи",
    reviewIds: ["oiwpcrBQAKj5K7smP3lVy", "yvLjlSo9w6T4Mp6gG22pc"],
  },
  {
    title: "Бэтмен: Начало",
    posterUrl: "https://i.postimg.cc/9QGfp799/image.webp",
    releaseYear: 2005,
    description:
      "В детстве юный наследник огромного состояния Брюс Уэйн оказался свидетелем убийства своих родителей, и тогда он решил бороться с преступностью. Спустя годы он отправляется в путешествие по миру, чтобы найти способ восстановить справедливость. Обучение у мудрого наставника боевым искусствам дает ему силу и смелость. Вернувшись в родной город, Уэйн становится Бэтменом и ведет борьбу со злом.",
    genre: "action",
    id: "2qtXtduRa5GHkfR5vB3Aw",
    rating: 8,
    director: "Кристофер Нолан",
    reviewIds: ["LLcQ8y3uJHfl3bDeTWqea", "w32kK5oV6UIr1ZHdkkMAn"],
  },
  {
    title: "Мальчишник в Вегасе",
    posterUrl: "https://i.postimg.cc/XqGjyG3p/image.webp",
    releaseYear: 2009,
    description:
      "Они мечтали устроить незабываемый мальчишник в Вегасе. Но теперь им необходимо вспомнить, что именно произошло: что за ребенок сидит в шкафу номера отеля? Как в ванную попал тигр? Почему у одного из них нет зуба? И, самое главное, куда делся жених? То, что парни вытворяли на вечеринке, не идет ни в какое сравнение с тем, что им придется сделать на трезвую голову, когда они будут шаг за шагом восстанавливать события прошлой ночи.",
    genre: "comedy",
    id: "ab4FWj-OOXyskLN1jhHh5",
    rating: 8,
    director: "Тодд Филлипс",
    reviewIds: ["JI5iDqk-wjl7HSYVCOZeW", "OVPbCJzb8wOGfhJ54JbVc"],
  },
  {
    title: "Впритык",
    posterUrl: "https://i.postimg.cc/3NsKj8J9/image.webp",
    releaseYear: 2010,
    description:
      "Питер готовится стать отцом и находится на грани нервного срыва. И его нервам не идет на пользу тот факт, что ему предстоит предпринять целое путешествие, да еще и в компании честолюбивого актера, чтобы успеть добраться домой к рождению собственного ребенка.",
    genre: "comedy",
    id: "huLQW2WaeH-zLQO73EIZB",
    rating: 8,
    director: "Тодд Филлипс",
    reviewIds: ["qAwLtajTlVz6Y-0OGbjiP", "FpeVYlPOHz4zbS4OQj5Dv"],
  },
  {
    title: "Американский пирог",
    posterUrl: "https://i.postimg.cc/YCc9Y3vk/image.webp",
    releaseYear: 1999,
    description:
      "На вечеринке четверо старшеклассников, Джим, Кевин, Финч и Оз, выясняют, что никто из них еще не имел сексуального опыта с девушками. Приятели считают, что с коллективной девственностью надо обязательно расстаться до того, как они переступят порог колледжа. На носу школьный выпускной бал, и у друзей осталось совсем мало времени на то, чтобы выполнить задуманное.",
    genre: "comedy",
    id: "f-r-NQvL_QPYSlLARgGi7",
    rating: 8,
    director: "Пол Вайц, Крис Вайц",
    reviewIds: ["-b9ezNy3oSoMpldgUl_IC", "PnxKfx6XS_RqcIxC7w4a7"],
  },
];

export type ReviewType = Review & {
  id: string;
};

export const reviews: ReviewType[] = [
  {
    id: "6iaV-jUSjfl-gGk8EOdQ1",
    name: "Андрей",
    text: "Фильм хороший, но сюжет немного затянут",
    rating: 7,
  },
  {
    id: "-b9ezNy3oSoMpldgUl_IC",
    name: "Екатерина",
    text: "В целом, фильм понравился, но некоторые моменты были не очень понятны",
    rating: 6,
  },
  {
    id: "joAPS_G2-BgIIYQNmkWHh",
    name: "Сергей",
    text: "Мне не очень понравился фильм, но в нем есть несколько интересных моментов",
    rating: 5,
  },
  {
    id: "un6oKnwU6pSZaxFfWQdUS",
    name: "Ольга",
    text: "Это был интересный опыт, но я ожидала большего",
    rating: 4,
  },
  {
    id: "F_sUc0y7PUNvm0_FVgK-l",
    name: "Анна",
    text: "Очень хороший фильм, рекомендую всем посмотреть",
    rating: 9,
  },
  {
    id: "t8QHNLoec1QF1XFyObGk7",
    name: "Александр",
    text: "Этот фильм стоит посмотреть хотя бы ради актерского состава",
    rating: 8,
  },
  {
    id: "wkitGBsyiLgdasQ7FT4ca",
    name: "Елена",
    text: "Фильм оставляет после себя приятное впечатление, но можно было сделать его более захватывающим",
    rating: 7,
  },
  {
    id: "M0bg9QY5gVtupNaglrmua",
    name: "Роман",
    text: "Сюжет интересен, но финал мог быть более неожиданным",
    rating: 6,
  },
  {
    id: "sFpB1zc2RB1_06S9PMWj4",
    name: "Шутник",
    text: "Этот фильм - настоящий шедевр!",
    rating: 10,
  },
  {
    id: "oiwpcrBQAKj5K7smP3lVy",
    name: "Комик",
    text: "Не понимаю, что все так восхищаются этим фильмом",
    rating: 6,
  },
  {
    id: "OJwAR3gCG2uM2BuoKiJF-",
    name: "Приколист",
    text: "Пойду посмотрю что-нибудь другое, этот фильм не очень",
    rating: 2,
  },
  {
    id: "jDMdBarsmE6m7m0baXY4_",
    name: "Юморист",
    text: "Я не понимаю, как можно ставить такие низкие оценки",
    rating: 8,
  },
  {
    id: "OVPbCJzb8wOGfhJ54JbVc",
    name: "Хохмач",
    text: "Это самый смешной фильм, который я когда-либо видел",
    rating: 9,
  },
  {
    id: "OX0AuLOo8FQgK7thnTu5N",
    name: "Смех да и только",
    text: "Фильм просто смешной, но не более того",
    rating: 5,
  },
  {
    id: "wax4rsvm_h6UGqQwapz5j",
    name: "Хиханьки",
    text: "Очень смешно, но непонятно, что смешного",
    rating: 3,
  },
  {
    id: "FpeVYlPOHz4zbS4OQj5Dv",
    name: "Ха-ха",
    text: "Мне не смешно, но я улыбаюсь",
    rating: 7,
  },
  {
    id: "w32kK5oV6UIr1ZHdkkMAn",
    name: "Смешинка",
    text: "Ну очень смешно, чуть не лопнул со смеху",
    rating: 4,
  },
  {
    id: "JI5iDqk-wjl7HSYVCOZeW",
    name: "Андрей",
    text: "Фильм хороший, но сюжет немного затянут",
    rating: 7,
  },
  {
    id: "Yj8yaD05nzHMvQk0921xF",
    name: "Екатерина",
    text: "В целом, фильм понравился, но некоторые моменты были не очень понятны",
    rating: 6,
  },
  {
    id: "KCvD5gFmTn8NeK43QglKe",
    name: "Сергей",
    text: "Мне не очень понравился фильм, но в нем есть несколько интересных моментов",
    rating: 5,
  },
  {
    id: "PnxKfx6XS_RqcIxC7w4a7",
    name: "Ольга",
    text: "Это был интересный опыт, но я ожидала большего",
    rating: 4,
  },
  {
    id: "OGNSCmINS-MLVuuvhrtGh",
    name: "Анна",
    text: "Очень хороший фильм, рекомендую всем посмотреть",
    rating: 9,
  },
  {
    id: "LLcQ8y3uJHfl3bDeTWqea",
    name: "Александр",
    text: "Этот фильм стоит посмотреть хотя бы ради актерского состава",
    rating: 8,
  },
  {
    id: "Sx2k0OsFL0qot9r_twc9f",
    name: "Елена",
    text: "Фильм оставляет после себя приятное впечатление, но можно было сделать его более захватывающим",
    rating: 7,
  },
  {
    id: "xsZN4Nd8wOWxX5dEok7hM",
    name: "Роман",
    text: "Сюжет интересен, но финал мог быть более неожиданным",
    rating: 6,
  },
  {
    id: "Y16csQhvXC2VRZXiqwjWE",
    name: "Шутник",
    text: "Этот фильм - настоящий шедевр!",
    rating: 10,
  },
  {
    id: "zb3Ui_Hmmy83OsUcS8y7W",
    name: "Комик",
    text: "Не понимаю, что все так восхищаются этим фильмом",
    rating: 6,
  },
  {
    id: "yvLjlSo9w6T4Mp6gG22pc",
    name: "Приколист",
    text: "Пойду посмотрю что-нибудь другое, этот фильм не очень",
    rating: 2,
  },
  {
    id: "3U5SB0Bu8ysjvduFnAMZN",
    name: "Юморист",
    text: "Я не понимаю, как можно ставить такие низкие оценки",
    rating: 8,
  },
  {
    id: "-5WByyVj9Oc_3RLZ_-jv5",
    name: "Хохмач",
    text: "Это самый смешной фильм, который я когда-либо видел",
    rating: 9,
  },
  {
    id: "Ryx3f_0VKXgb4qKbEYRqT",
    name: "Смех да и только",
    text: "Фильм просто смешной, но не более того",
    rating: 5,
  },
  {
    id: "qAwLtajTlVz6Y-0OGbjiP",
    name: "Хиханьки",
    text: "Очень смешно, но непонятно, что смешного",
    rating: 3,
  },
  {
    id: "9wUCPgqmjqLOc0g-80Ioj",
    name: "Ха-ха",
    text: "Мне не смешно, но я улыбаюсь",
    rating: 7,
  },
  {
    id: "0VioUEGFNySTyrRDEKRlj",
    name: "Смешинка",
    text: "Ну очень смешно, чуть не лопнул со смеху",
    rating: 4,
  },
];
