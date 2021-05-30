<template>
  <div>
    <div class="container">
      <div class="column">
        <b-pagination
          :total="petsData.itemsCount"
          :per-page="itemsPerPage"
          v-model="currentPage"
          aria-next-label="Proxima pagina"
          aria-previous-label="Pagina anterior"
          aria-page-label="Pagina"
          aria-current-label="Pagina atual"
        >
        </b-pagination>
      </div>
    </div>
    <div class="columns is-multiline pr-4">
      <div class="column is-4" v-for="pet in petsData.data" :key="pet.id">
        <!-- Pet-card (separar em componente) -->
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="pet.petPhotos[0].photoUri" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left is-relative">
                <b-icon
                  :icon="{ 0: 'paw', 1: 'dog', 2: 'cat' }[pet._specie]"
                  pack="fas"
                  size="is-large"
                >
                </b-icon>
                <b-icon
                  :icon="{ M: 'mars', F: 'venus', N: 'genderless' }[pet.sex]"
                  :class="{
                    'sex-icon': true,
                    'sex-icon-male': !!(pet.sex == 'M'),
                    'sex-icon-female': !!(pet.sex == 'F'),
                  }"
                  pack="fas"
                  size="is-large"
                >
                </b-icon>
              </div>
              <div class="media-content">
                <p class="title is-4">
                  {{ pet.name }}
                  <span class="is-size-6 is-italic has-text-weight-light">{{
                    calculateAge(pet._birthdayDate)
                  }}</span>
                </p>
                <p class="subtitle is-6 mb-1">@nome do protetor</p>
                <p class="subtitle is-6 mb-1">
                  {{ petSizeTransform(pet._size) }}
                </p>
              </div>
            </div>

            <div class="content">
              {{ pet.simpleDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/pt-br";
export default {
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 15,
      test: 0,
      testTwo: 0,
      petsData: {
        pageCount: 5,
        itemsCount: 100,
        actualPage: 1,
        consts: {
          species: {
            "0": "Other",
            "1": "Dog",
            "2": "Cat",
          },
          sizes: {
            "0": "Very Small",
            "1": "Small",
            "2": "Medium",
            "3": "Large",
            "4": "Extra Large",
          },
        },
        data: [
          {
            id: 1,
            protectorId: 6,
            name: "Compadre",
            _birthdayDate: "2016-08-06T08:41:47.494Z",
            _size: 0,
            _specie: 2,
            simpleDescription:
              "Minus laudantium debitis voluptatem mollitia repellat rerum ducimus.",
            detailedDescription:
              "Dolores eum excepturi sed et voluptatem nostrum tenetur modi ratione. Occaecati iure ipsum minima incidunt quidem. Officiis dolore sed voluptatem laudantium eos mollitia aperiam. Inventore ut molestiae quas aperiam ullam. Quis reiciendis quo dolorum ratione ut et quia.\n \rRerum occaecati est quo eum sint commodi porro doloribus. Id officiis rerum nam amet optio accusantium ut placeat sunt. Qui incidunt rerum qui et nam amet eum fugiat. Et et omnis corrupti molestias voluptas debitis laborum. Illum ut velit quos. Quia sint et vero tempore totam et architecto vel.\n \rBeatae eaque necessitatibus. Doloribus sunt quos perspiciatis sed nisi. Atque expedita non quis eos rerum quis repellat officiis doloribus. Nemo ut molestiae. Doloribus qui ut deleniti. Quia minima vel dolor eos omnis necessitatibus iste architecto sit.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:22.156Z",
            petPhotos: [
              {
                id: 1,
                petId: 1,
                photoUri: "https://cataas.com/cat/5d39a4a814ca600011538e7c",
                _createdAt: "2021-05-23T02:01:22.610Z",
              },
            ],
          },
          {
            id: 2,
            protectorId: 6,
            name: "Preguiça",
            _birthdayDate: "2016-06-23T20:30:29.562Z",
            _size: 2,
            _specie: 2,
            simpleDescription: "Unde iure ipsam voluptatem.",
            detailedDescription:
              "Sit eveniet deserunt vel minus perferendis saepe omnis pariatur. Molestiae cum perferendis et quis. Quibusdam ut nisi.\n \rEnim voluptatem repellendus voluptate accusamus officiis. Perspiciatis aliquid corrupti labore est reiciendis soluta praesentium. Rem explicabo ducimus eum quo a repellat numquam et. Laborum perferendis aut qui repudiandae eveniet consectetur. Quia aut non perspiciatis ipsam minima ullam culpa ex.\n \rVoluptatem sit unde veniam ex consequatur veniam nihil et. Tenetur ad veniam exercitationem consequatur possimus. Ducimus nisi error necessitatibus amet maxime. Quisquam commodi omnis veniam aspernatur fugiat sunt dolore.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:22.611Z",
            petPhotos: [
              {
                id: 2,
                petId: 2,
                photoUri: "https://cataas.com/cat/5a56db9749a93e000ffdf001",
                _createdAt: "2021-05-23T02:01:22.937Z",
              },
            ],
          },
          {
            id: 3,
            protectorId: 6,
            name: "Compadre",
            _birthdayDate: "2017-02-18T05:21:24.435Z",
            _size: 0,
            _specie: 1,
            simpleDescription: "In accusantium sint necessitatibus.",
            detailedDescription:
              "Et exercitationem quo atque sunt tempore est. Et officiis est. Et minima voluptas labore ut molestias maiores et pariatur voluptas. Et repellendus rerum saepe nemo et sit. Qui id ut tempore cupiditate inventore dolor aut.\n \rNobis fugit doloremque et culpa maxime dolorem. Unde aut cum quia nam voluptate dolores est. Id commodi et iste.\n \rMinima qui magnam nihil ad. Veniam voluptatum eaque dolor repudiandae ducimus maxime aut. Et eaque mollitia non consequuntur assumenda ipsum quas expedita quaerat. Qui consequatur dolores voluptas. Ut deserunt consectetur iure aut atque esse impedit. Omnis non natus facere voluptatem nulla neque nesciunt voluptatum.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:22.938Z",
            petPhotos: [
              {
                id: 3,
                petId: 3,
                photoUri: "https://images.dog.ceo/breeds/puggle/IMG_122350.jpg",
                _createdAt: "2021-05-23T02:01:23.214Z",
              },
            ],
          },
          {
            id: 4,
            protectorId: 6,
            name: "Tampinha",
            _birthdayDate: "2019-12-15T22:43:10.861Z",
            _size: 1,
            _specie: 1,
            simpleDescription:
              "Tempora consequatur natus architecto quaerat enim.",
            detailedDescription:
              "Modi tempora quae ea rerum ut molestiae. Et suscipit amet libero iste illum veniam voluptatem exercitationem laborum. Occaecati incidunt corrupti dolorem quos ea. Ducimus sed quia facere porro corporis doloremque.\n \rEt et dolore sequi consequatur cum. Tempore numquam illo est eos quae et. Labore sint saepe temporibus dolor.\n \rSoluta inventore et exercitationem id quae voluptas. Natus non nisi explicabo iusto dolor quasi voluptatem ut rem. Sit mollitia et doloremque adipisci voluptas. Dicta ut quibusdam exercitationem ex eveniet est.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:23.215Z",
            petPhotos: [
              {
                id: 4,
                petId: 4,
                photoUri:
                  "https://images.dog.ceo/breeds/leonberg/n02111129_3461.jpg",
                _createdAt: "2021-05-23T02:01:23.462Z",
              },
            ],
          },
          {
            id: 5,
            protectorId: 6,
            name: "Pink",
            _birthdayDate: "2020-10-11T05:31:51.590Z",
            _size: 1,
            _specie: 2,
            simpleDescription: "Sed qui quae quibusdam rerum deserunt.",
            detailedDescription:
              "Et quia tempore neque accusantium unde excepturi non explicabo. Sint molestias repudiandae sit dolorum commodi fuga fugit ducimus. Maiores maxime quia.\n \rQuia id quasi sed distinctio aut omnis beatae. Laboriosam consequuntur ab veritatis voluptas aperiam praesentium quas consequuntur. Doloremque saepe quidem sapiente rem est facilis. Qui consectetur aut iste autem nihil est. Deleniti dolor ipsa libero vero et sit cupiditate cupiditate qui.\n \rIpsa excepturi officia omnis laboriosam praesentium vero. Saepe cupiditate ea. Qui voluptates non non eum rerum qui dignissimos.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:23.463Z",
            petPhotos: [
              {
                id: 5,
                petId: 5,
                photoUri: "https://cataas.com/cat/5b55c2addf7368000f914b48",
                _createdAt: "2021-05-23T02:01:23.751Z",
              },
            ],
          },
          {
            id: 6,
            protectorId: 6,
            name: "Boneca",
            _birthdayDate: "2018-09-02T14:02:24.633Z",
            _size: 3,
            _specie: 1,
            simpleDescription: "Rerum molestiae voluptatem.",
            detailedDescription:
              "Ex omnis autem modi itaque. Aut soluta omnis. Consequatur voluptatem ipsam laudantium ut. In eligendi aperiam voluptatem nostrum molestiae autem ea et omnis. Dolorem in minus praesentium non dolor fuga doloribus blanditiis reprehenderit.\n \rCorporis ex minus ullam ullam. Et quia cum voluptatem qui. Vero delectus consequuntur harum sed eum accusamus. Dolores ad dolores nostrum.\n \rNisi rem assumenda cum sed sint impedit. Molestias qui vel et voluptatum architecto iusto commodi. Expedita odit autem fugit id ad exercitationem eligendi excepturi et. Est porro reprehenderit non aut culpa laborum.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:23.751Z",
            petPhotos: [
              {
                id: 6,
                petId: 6,
                photoUri:
                  "https://images.dog.ceo/breeds/hound-blood/n02088466_8904.jpg",
                _createdAt: "2021-05-23T02:01:24.002Z",
              },
            ],
          },
          {
            id: 7,
            protectorId: 6,
            name: "Pistache",
            _birthdayDate: "2017-07-12T07:42:15.987Z",
            _size: 4,
            _specie: 1,
            simpleDescription:
              "Eos aliquid mollitia aspernatur voluptate id ut impedit provident tempora.",
            detailedDescription:
              "Accusantium illo iure. Enim occaecati ut nihil doloremque voluptatem sed repellat. Ad ut rerum cupiditate maxime rem molestiae aperiam omnis. Cupiditate hic et consectetur maiores ratione dolores est et. Eaque veniam omnis fugit libero qui dolorem.\n \rQuia fugiat distinctio asperiores ipsa. Qui exercitationem veniam est voluptatem alias illo eligendi aspernatur. Libero aliquid rerum est.\n \rVoluptas inventore quaerat voluptatem odio hic. Amet eaque molestias explicabo officiis repellat. Natus fugit ipsum ea corrupti voluptatem amet non ut adipisci. Possimus animi aut. Enim placeat et labore nemo. Debitis consequatur est expedita doloribus vel reprehenderit iusto.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:24.003Z",
            petPhotos: [
              {
                id: 7,
                petId: 7,
                photoUri:
                  "https://images.dog.ceo/breeds/saluki/n02091831_5745.jpg",
                _createdAt: "2021-05-23T02:01:24.284Z",
              },
            ],
          },
          {
            id: 8,
            protectorId: 6,
            name: "Gaguinho",
            _birthdayDate: "2018-04-30T17:18:44.779Z",
            _size: 3,
            _specie: 2,
            simpleDescription:
              "Quo architecto deleniti cupiditate quaerat incidunt et ut sit.",
            detailedDescription:
              "Illo fugit commodi consequatur repellat molestiae. Qui quia quas occaecati non. Nobis voluptatem consectetur porro dolores dolorem repellat quasi.\n \rIusto vero deleniti qui est laboriosam praesentium. Voluptatem velit neque nesciunt qui. Necessitatibus consectetur vel qui. Voluptatum voluptas laudantium explicabo. Ducimus rerum explicabo pariatur perferendis.\n \rA explicabo doloremque vero ut necessitatibus. Et et consequuntur eos quisquam natus qui similique aut reiciendis. Et eum eveniet quibusdam pariatur similique quaerat accusamus doloribus maxime. Dolor quis suscipit est qui nulla. Pariatur sint autem optio ea et. Officiis hic aut officiis assumenda voluptates.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:24.284Z",
            petPhotos: [
              {
                id: 8,
                petId: 8,
                photoUri: "https://cataas.com/cat/595f280f557291a9750ebfb1",
                _createdAt: "2021-05-23T02:01:24.584Z",
              },
            ],
          },
          {
            id: 9,
            protectorId: 6,
            name: "Dori",
            _birthdayDate: "2016-05-26T17:44:12.760Z",
            _size: 1,
            _specie: 2,
            simpleDescription: "Quibusdam enim omnis est aut.",
            detailedDescription:
              "Maxime natus eligendi molestiae id. Accusantium recusandae minima aut impedit architecto neque deserunt. Iste atque occaecati eos et illo quod aperiam.\n \rEaque nihil sit omnis sit aspernatur qui. Porro illo dicta dolor. Omnis necessitatibus necessitatibus repellat ex pariatur et temporibus. Est sed in aut.\n \rDignissimos qui minima ut incidunt ut possimus. Accusantium voluptate atque. Architecto beatae ratione. Ut eveniet voluptatibus accusamus sint. Quo deleniti quam fuga quod maxime libero consequatur accusantium deleniti. Et ipsum et illo vel voluptatem quas vero ut iusto.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:24.585Z",
            petPhotos: [
              {
                id: 9,
                petId: 9,
                photoUri: "https://cataas.com/cat/600b619745b1e600111a0572",
                _createdAt: "2021-05-23T02:01:24.872Z",
              },
            ],
          },
          {
            id: 10,
            protectorId: 6,
            name: "Gata",
            _birthdayDate: "2016-08-26T17:33:41.470Z",
            _size: 1,
            _specie: 2,
            simpleDescription:
              "Magni beatae est assumenda est modi perferendis mollitia.",
            detailedDescription:
              "Quos aspernatur aut quis repudiandae molestias voluptatem harum eligendi. Sunt alias enim eum sed id iusto fugiat. Minima molestiae facilis.\n \rSit dolores rerum. Voluptatem non animi saepe est. Mollitia vero voluptatem. Velit non at. Quaerat ducimus ea suscipit temporibus sint doloribus alias temporibus eum.\n \rQui aspernatur temporibus. Est mollitia autem alias molestiae id molestiae. Saepe tempore sunt doloribus. Eligendi ullam rerum dolor voluptatem dignissimos repudiandae quibusdam. Reiciendis totam rerum aliquam. Quidem repudiandae sapiente aut quia nihil sint eveniet.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:24.872Z",
            petPhotos: [
              {
                id: 10,
                petId: 10,
                photoUri: "https://cataas.com/cat/600029301bf75600108f615c",
                _createdAt: "2021-05-23T02:01:25.146Z",
              },
            ],
          },
          {
            id: 11,
            protectorId: 7,
            name: "Lilac",
            _birthdayDate: "2018-05-05T21:50:03.694Z",
            _size: 1,
            _specie: 2,
            simpleDescription:
              "Labore impedit tempora perferendis quo et maxime recusandae.",
            detailedDescription:
              "Expedita earum magni. Molestias deserunt vitae rerum. Quis ullam nihil quod.\n \rConsequatur animi exercitationem quod corporis ut. Quaerat explicabo sit fuga inventore perspiciatis culpa. Iusto dolorem perferendis.\n \rNatus qui quo ut temporibus quaerat delectus. Consequuntur et nesciunt. Eum nostrum voluptatem et quis voluptatum illum nam. Id molestiae temporibus cum ut quo.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:25.203Z",
            petPhotos: [
              {
                id: 11,
                petId: 11,
                photoUri: "https://cataas.com/cat/5f8de0863deac500178f8904",
                _createdAt: "2021-05-23T02:01:25.470Z",
              },
            ],
          },
          {
            id: 12,
            protectorId: 7,
            name: "Pocahontas",
            _birthdayDate: "2019-10-19T21:32:29.303Z",
            _size: 1,
            _specie: 2,
            simpleDescription: "Iure eaque quis quis aut velit aut.",
            detailedDescription:
              "Quia ab aspernatur qui ullam consequatur quisquam. Tenetur totam dolor autem voluptatum ratione. Ut cupiditate aut vel ad fugiat deleniti iure.\n \rTenetur nihil et ex natus et deleniti. Ea esse consequuntur consequuntur delectus atque. Sed aliquid et. Veritatis minus quisquam nostrum voluptatem. Repellat fugit quisquam commodi eius quia consequatur est omnis.\n \rFacere suscipit est quisquam. Rerum necessitatibus sint omnis esse. Nesciunt sint nesciunt reprehenderit. Voluptatem qui libero veniam maiores laudantium autem sit quisquam illo. Dolorem illum impedit sed ut voluptas officiis quis. Molestiae nihil corporis enim rerum non.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:25.471Z",
            petPhotos: [
              {
                id: 12,
                petId: 12,
                photoUri: "https://cataas.com/cat/5fc55a001edf9e001798d1de",
                _createdAt: "2021-05-23T02:01:25.776Z",
              },
            ],
          },
          {
            id: 13,
            protectorId: 7,
            name: "Sofia",
            _birthdayDate: "2017-05-05T20:56:23.665Z",
            _size: 1,
            _specie: 2,
            simpleDescription:
              "In est distinctio ut quibusdam unde est quaerat eaque ut.",
            detailedDescription:
              "Iusto facere quia quia et numquam dicta unde laboriosam dolorum. Aut sint quisquam possimus dignissimos sit quidem architecto vero non. Ipsum dolores consequuntur laborum repudiandae vero rem in. Aut quo sit dolorem rem quasi. Architecto autem ex velit. Nobis beatae eligendi sit harum.\n \rSapiente modi et quia eum quasi possimus dignissimos similique voluptas. Possimus veritatis molestias dolorem culpa repudiandae quaerat aliquid. Quibusdam quos deleniti ut magni quae nihil. Rerum vitae corporis consequatur cumque aut culpa quis. Earum praesentium corporis. Omnis ut omnis voluptatem aut.\n \rSunt odio et. Et recusandae consequatur dolorem blanditiis. Vero voluptas aliquid est earum delectus consequatur nemo. Quia perferendis dolores.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:25.777Z",
            petPhotos: [
              {
                id: 13,
                petId: 13,
                photoUri: "https://cataas.com/cat/5ab107b488b001000f9168f8",
                _createdAt: "2021-05-23T02:01:26.060Z",
              },
            ],
          },
          {
            id: 14,
            protectorId: 7,
            name: "Golfinho",
            _birthdayDate: "2020-07-28T22:56:04.781Z",
            _size: 4,
            _specie: 1,
            simpleDescription:
              "Labore doloribus est voluptatum aut perspiciatis amet.",
            detailedDescription:
              "Cumque porro consequatur soluta aspernatur. Sit occaecati aut rerum eligendi animi harum. Itaque earum rerum aut error sunt ab.\n \rRerum ea sunt enim est reprehenderit quisquam. Ut iure quisquam magnam nihil quisquam enim libero quos aperiam. Quia officiis cupiditate sed labore labore corrupti.\n \rEt aut ducimus consectetur est. Ut quibusdam cum fuga quia repellendus quas cupiditate. Adipisci nesciunt laudantium aut. Id qui quam. Voluptatum fugit voluptas. Nihil hic consectetur architecto voluptatum adipisci.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:26.061Z",
            petPhotos: [
              {
                id: 14,
                petId: 14,
                photoUri:
                  "https://images.dog.ceo/breeds/clumber/n02101556_2580.jpg",
                _createdAt: "2021-05-23T02:01:26.306Z",
              },
            ],
          },
          {
            id: 15,
            protectorId: 7,
            name: "Dengosa",
            _birthdayDate: "2016-07-26T21:23:29.981Z",
            _size: 2,
            _specie: 1,
            simpleDescription: "Voluptatibus aut voluptatem.",
            detailedDescription:
              "Repudiandae adipisci et odit eveniet aperiam laudantium illo. Optio minima quas. Cupiditate et veniam voluptatem architecto in ab. Deserunt voluptatem nihil esse ipsum exercitationem corrupti quo maxime excepturi. Non qui non distinctio nesciunt omnis. Illum qui eos quos et occaecati sit omnis enim.\n \rAtque accusantium modi libero. Eaque eius facilis reprehenderit voluptate quas dignissimos. Voluptatem sint ut facere omnis eum accusantium sunt omnis. Necessitatibus voluptas est id tenetur animi optio in inventore amet. Adipisci voluptatem repudiandae facilis quidem. Aut quo vel occaecati qui culpa.\n \rSoluta est a accusamus tenetur adipisci earum. Consectetur quis ut inventore quisquam dolor ipsam non. Ut repellat quia dolores recusandae rem. Quo eius maiores voluptatibus. Nihil quo ut officia sed harum omnis omnis pariatur. Harum sunt doloremque vel perferendis.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:26.308Z",
            petPhotos: [
              {
                id: 15,
                petId: 15,
                photoUri:
                  "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191030212452971_COVER.jpg",
                _createdAt: "2021-05-23T02:01:26.555Z",
              },
            ],
          },
          {
            id: 16,
            protectorId: 7,
            name: "Linguado",
            _birthdayDate: "2020-04-23T02:58:39.232Z",
            _size: 3,
            _specie: 1,
            simpleDescription: "Architecto distinctio suscipit molestiae.",
            detailedDescription:
              "Sed voluptatem voluptatum vero voluptatem molestiae. Minima modi maiores voluptatum temporibus minima voluptate dolores. Quidem eius voluptatum illo facere.\n \rNulla consequatur qui quos aspernatur ut libero et sit dolorem. Neque quisquam est. Ut fugiat illum necessitatibus sit eius blanditiis occaecati facere. Facere numquam assumenda rem aliquid doloribus asperiores libero. Voluptate voluptates qui.\n \rQuis est alias. Magnam a dolor sit explicabo optio rerum harum temporibus. Et facilis ex dolore debitis. Non cupiditate quo labore eaque nulla. Asperiores consectetur sequi delectus ut exercitationem itaque aliquam tenetur. Laboriosam atque quidem sit corrupti dolor provident non aut.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:26.556Z",
            petPhotos: [
              {
                id: 16,
                petId: 16,
                photoUri: "https://images.dog.ceo/breeds/shiba/shiba-19.jpg",
                _createdAt: "2021-05-23T02:01:26.857Z",
              },
            ],
          },
          {
            id: 17,
            protectorId: 7,
            name: "Pocket",
            _birthdayDate: "2019-06-12T12:45:40.733Z",
            _size: 2,
            _specie: 2,
            simpleDescription:
              "Commodi provident aperiam est est reiciendis rerum impedit.",
            detailedDescription:
              "Eligendi voluptates earum officiis recusandae necessitatibus minima ullam dolor. Exercitationem corrupti est in mollitia velit minus excepturi. Iste dolor perspiciatis.\n \rSuscipit est quia unde ut quae repellat tenetur. Pariatur officiis asperiores aut. Velit omnis dolorum. Sapiente libero animi sed dolor. Et molestias nostrum placeat. Aut nesciunt ratione dicta.\n \rLaudantium aliquam quia aut et. Ut amet assumenda cumque quidem et. Veniam eum qui dolorem molestiae cumque error sunt consequuntur incidunt. Odit illo alias et modi quis in dolor architecto. Libero aut nesciunt voluptate at sint facere aut magnam non. Laudantium eveniet temporibus reprehenderit quod vero.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:26.858Z",
            petPhotos: [
              {
                id: 17,
                petId: 17,
                photoUri: "https://cataas.com/cat/595f280d557291a9750ebf8e",
                _createdAt: "2021-05-23T02:01:27.168Z",
              },
            ],
          },
          {
            id: 18,
            protectorId: 7,
            name: "Nana",
            _birthdayDate: "2020-11-22T00:28:14.047Z",
            _size: 2,
            _specie: 1,
            simpleDescription: "Ipsum ea non.",
            detailedDescription:
              "Nihil vel consectetur sint et voluptates rem voluptatem est. Cumque fuga cum magni et voluptas sequi odio omnis quisquam. Autem vel id modi ut. Quae explicabo totam.\n \rEst et ipsum quia non magnam amet vero ullam. Exercitationem neque mollitia. Vel sed deleniti incidunt magnam enim hic libero quia. Omnis impedit eum non in in ea. Officia quo porro exercitationem quis quia quam exercitationem neque.\n \rUllam aut itaque. Natus odio quae excepturi nobis aut animi sit. Similique ad enim hic aut facilis. Itaque impedit est minus. Omnis qui ut. Omnis eum sit.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:27.169Z",
            petPhotos: [
              {
                id: 18,
                petId: 18,
                photoUri:
                  "https://images.dog.ceo/breeds/pembroke/n02113023_6570.jpg",
                _createdAt: "2021-05-23T02:01:27.431Z",
              },
            ],
          },
          {
            id: 19,
            protectorId: 7,
            name: "Ava",
            _birthdayDate: "2018-05-02T03:49:00.915Z",
            _size: 1,
            _specie: 2,
            simpleDescription: "Ut quia iure.",
            detailedDescription:
              "Quas maiores libero est ex. Qui est earum molestiae qui sed eos et et. Sed dolorem voluptate rem impedit. Nobis omnis aut sed possimus et. Nulla ut inventore atque veritatis quo quo.\n \rOmnis cupiditate deleniti possimus quasi quidem iste molestias. Earum modi nulla eum quia veniam. Quia animi alias natus maiores voluptates enim omnis assumenda. Ea dolorem voluptates nostrum in soluta.\n \rVelit vitae rerum reprehenderit tempora. Facere sint blanditiis. Dolorum at enim aut. In veniam in recusandae totam aperiam. Sapiente labore occaecati rerum quia iure vitae tenetur dolorem fuga. Officia occaecati qui reiciendis sunt quis id.",
            sex: "F",
            _createdAt: "2021-05-23T02:01:27.431Z",
            petPhotos: [
              {
                id: 19,
                petId: 19,
                photoUri: "https://cataas.com/cat/5e2b4b644348da001c78fb87",
                _createdAt: "2021-05-23T02:01:27.730Z",
              },
            ],
          },
          {
            id: 20,
            protectorId: 7,
            name: "Professor",
            _birthdayDate: "2019-04-19T15:57:47.997Z",
            _size: 2,
            _specie: 2,
            simpleDescription: "Rerum enim tempore.",
            detailedDescription:
              "Ut modi aperiam aliquam dignissimos sint maiores. Officiis eum adipisci inventore minima architecto ipsum voluptates quasi. Alias repellat molestiae deleniti.\n \rA quis nisi cumque cupiditate numquam illum nostrum perspiciatis repudiandae. Ipsum et temporibus vel. Dignissimos consequatur accusamus dolorem ratione. Quia dolorem occaecati ipsa tenetur quisquam. Assumenda neque dolorum necessitatibus adipisci consectetur eligendi est reprehenderit. Impedit eos aut voluptas eius.\n \rEt odit ex accusantium quaerat magnam maxime. Occaecati rerum iste praesentium repellat excepturi. Eligendi suscipit sit fuga vel magnam ducimus quos. Nostrum sit et.",
            sex: "M",
            _createdAt: "2021-05-23T02:01:27.730Z",
            petPhotos: [
              {
                id: 20,
                petId: 20,
                photoUri: "https://cataas.com/cat/5a96cd7233dc7b000f7b00b5",
                _createdAt: "2021-05-23T02:01:28.096Z",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    petSizeTransform(petSize) {
      let sizes = {
        "0": "Bem Pequeno",
        "1": "Pequeno",
        "2": "Médio",
        "3": "Grande",
        "4": "Bem Grande",
      };
      //   return this.petsData.consts.sizes[petSize];
      return sizes[petSize];
    },
    calculateAge(birthdayDate) {
      return moment(birthdayDate).fromNow(true);
    },
  },
};
</script>

<style lang="scss">
.sex-icon {
  position: absolute;
  top: 1.5rem;
  left: 1rem;
}
.sex-icon-male {
  color: #b0c7ed;
}
.sex-icon-female {
  color: #e0caed;
}
</style>
