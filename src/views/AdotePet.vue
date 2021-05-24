<template>
    <main>
    <section class="filtro">
      <div class="container">
          <div class="box">
            <div class="columns">
                <div class="column is-one-third mt-5">
                    <img src="../assets/pet-adoption.png">
                </div>
                <div class="column">
                    <h1 class="is-size-3 is-uppercase has-text-weight-light">
                        {{user.firstName}},
                    </h1>
                    <h1 class="is-size-6 is-uppercase has-text-weight-light pb-2">
                        Aqui você pode filtrar pelos animais desejados.
                    </h1><br>
                 <b-field label="Nome" :label-position="labelPosition">
                    <b-autocomplete
                        rounded
                        :data="['']"
                        placeholder="Informação específica do Pet"
                        icon="magnify"
                        clearable
                        @select="option => selected = option">
                        <template #empty>No results found</template>
                    </b-autocomplete>
                 </b-field>
                 <b-field grouped>
                 <b-field label="Animal">
                    <b-select placeholder="Animal" icon="cat" rounded>
                        <option value="1">Gato</option>
                        <option value="2">Cachorro</option>
                    </b-select>
                </b-field>
                <b-field label="Porte">
                    <b-select placeholder="Porte" icon="foot-print" rounded>
                        <option value="1">Pequeno</option>
                        <option value="2">Médio</option>
                        <option value="2">Grande</option>
                    </b-select>
                </b-field>
                <b-field label="Sexo">
                    <b-select placeholder="Sexo" icon="gender-male-female" rounded>
                        <option value="1">Macho</option>
                        <option value="2">Fêmea</option>
                    </b-select>
                </b-field>
                 </b-field>
                </div>
            </div>
          </div>
      </div>
    </section>
    <div class="container">
        <div class="column">
     <b-pagination
            :total="total"
            v-model="current"
            :range-before="rangeBefore"
            :range-after="rangeAfter"
            :order="order"
            :size="size"
            :simple="isSimple"
            :rounded="isRounded"
            :per-page="perPage"
            :icon-prev="prevIcon"
            :icon-next="nextIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">
        </b-pagination>
        </div>
    </div>
    <div class="container">
    <div class="is-flex is-flex-wrap-wrap is-justify-content-center mb-6 ">
    <b-carousel-list class="mt-6" v-model="test" :data="items" :items-to-show="2">
        <template #item="list">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <a @click="info(list.index)"><img :src="list.image"></a>
                    </figure>
                    <b-tag type="is-danger" rounded style="position: absolute; top: 0;"><b>{{list.sizePet}}</b></b-tag>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-6">{{ list.title }}</p>
                        <p class="subtitle is-7">{{list.subtitle}}</p>
                        <b-field grouped >
                            <p class="control" v-if="list.rating">
                                <b-rate :value="list.rating" show-score disabled/>
                            </p>
                            <p class="control" style="margin-left: auto">
                                <b-button size="is-small" type="is-danger" icon-left="heart" outlined>ADOTE</b-button>
                            </p>
                        </b-field>
                    </div>
                </div>
            </div>
        </template>
    </b-carousel-list>

    <b-carousel-list class="mt-6" v-model="testTwo" :data="itemsTwo" :items-to-show="2">
        <template #item="list">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <a @click="info(list.index)"><img :src="list.image"></a>
                    </figure>
                    <b-tag type="is-danger" rounded style="position: absolute; top: 0;"><b>{{list.sizePet}}</b></b-tag>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-6">{{ list.title }}</p>
                        <p class="subtitle is-7">{{list.subtitle}}</p>
                        <b-field grouped >
                            <p class="control" v-if="list.rating">
                                <b-rate :value="list.rating" show-score disabled/>
                            </p>
                            <p class="control" style="margin-left: auto">
                                <b-button size="is-small" type="is-danger" icon-left="heart" outlined>ADOTE</b-button>
                            </p>
                        </b-field>
                    </div>
                </div>
            </div>
        </template>
    </b-carousel-list>

    </div>
    </div>
    </main>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
    ...mapState(["user"]),
    },
    data() {
        return {
            total: 200,
            current: 1,
            perPage: 5,
            rangeBefore: 3,
            rangeAfter: 1,
            order: '',
            size: '',
            isSimple: false,
            isRounded: false,
            prevIcon: 'chevron-left',
            nextIcon: 'chevron-right',
            test: 0,
            testTwo: 0,
            items: [
                {
                    title: 'Cusco',
                    subtitle: 'anderson@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2020/06/25/21/03/dog-5340892_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 4.4
                },
                {
                    title: 'Isabel',
                    subtitle: 'anderson@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2018/07/12/18/13/animal-3534084_960_720.jpg',
                    sizePet: 'Pequeno',
                    rating: 4.4
                },
                {
                    title: 'Guria',
                    subtitle: 'mathaus@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2017/05/09/23/02/dog-2299482_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 5
                },
                {
                    title: 'Husky',
                    subtitle: 'mathaus@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg',
                    sizePet: 'Grande',
                    rating: 5
                },
                {
                    title: 'Ted',
                    subtitle: 'mathaus@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_960_720.jpg',
                    sizePet: 'Muito Grande',
                    rating: 5
                },
                {
                    title: 'Deisy',
                    subtitle: 'frederico@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2015/12/08/00/52/puppy-1082141_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 2.5
                },
                {
                    title: 'Salcicha',
                    subtitle: 'pedrao@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 3.7
                },
                {
                    title: 'Bajo',
                    subtitle: 'vitor@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_960_720.jpg',
                    sizePet: 'Grande',
                    rating: 4.0
                }
            ],
            itemsTwo: [
                {
                    title: 'Sofia',
                    subtitle: 'anderson@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 4.4
                },
                {
                    title: 'Luna',
                    subtitle: 'anderson@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg',
                    sizePet: 'Pequeno',
                    rating: 4.4
                },
                {
                    title: 'Stevie',
                    subtitle: 'mathaus@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 5
                },
                {
                    title: 'Jobinha',
                    subtitle: 'mathaus@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2016/03/27/21/16/pet-1284307_960_720.jpg',
                    sizePet: 'Grande',
                    rating: 5
                },
                {
                    title: 'Willie',
                    subtitle: 'mathaus@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg',
                    sizePet: 'Muito Grande',
                    rating: 5
                },
                {
                    title: 'Rex',
                    subtitle: 'frederico@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 2.5
                },
                {
                    title: 'Scooby',
                    subtitle: 'pedrao@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_960_720.jpg',
                    sizePet: 'Médio',
                    rating: 3.7
                },
                {
                    title: 'Toddy',
                    subtitle: 'vitor@adopet.me',
                    image: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg',
                    sizePet: 'Grande',
                    rating: 4.0
                }
            ]
        }
    },
    methods: {
        info(value) {
            this.test = value
        }
    }
}
</script>

<style lang="scss" scoped>
    main{
        min-height: calc(100vh - 52px);
        
    }
    .filtro{
    background: url(../assets/capa.png), url(../assets/ruido.png),
    linear-gradient(110deg, $adopetme-logo-color, $primary);    
    padding: 40px
    }

</style>