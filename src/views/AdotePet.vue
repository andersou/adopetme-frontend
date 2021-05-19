<template>
    <main>
    <div class="column">
    <div class="is-flex is-flex-wrap-wrap is-justify-content-center ">
    <b-carousel-list class="mt-6" v-model="test" :data="items" :items-to-show="2">
        <template #item="list">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-5by4">
                        <a @click="info(list.index)"><img :src="list.image"></a>
                    </figure>
                    <b-tag type="is-danger" rounded style="position: absolute; top: 0;"><b>Médio</b></b-tag>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-6">{{ list.title }}</p>
                        <p class="subtitle is-7">@johnsmith</p>
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
export default {
    data() {
        return {
            test: 0,
            items: [
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2020/06/25/21/03/dog-5340892_960_720.jpg',
                    rating: 4.4
                },
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2018/07/12/18/13/animal-3534084_960_720.jpg',
                    rating: 3.5
                },
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2017/05/09/23/02/dog-2299482_960_720.jpg',
                    rating: 5
                },
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566_960_720.jpg'
                },
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_960_720.jpg',
                    rating: 5
                },
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2015/12/08/00/52/puppy-1082141_960_720.jpg',
                    rating: 4
                },
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg',
                    rating: 2.7
                },
                {
                    title: 'Nome',
                    image: 'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_960_720.jpg',
                    rating: 1.5
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
        background:   url(../assets/capa.png),
                      url(../assets/ruido.png),
                      linear-gradient(110deg, $adopetme-logo-color, $primary);
        background-attachment: fixed;
        min-height: calc(100vh - 52px)
    }
</style>