import moment from "moment";
import "moment/locale/pt-br";
function momentPlugin() {
    return {
        install(Vue) {
            Vue.prototype.$moment = moment;
        }
    }
}
export {
    momentPlugin
};
export default {

    methods: {
        processUserLink(link) {
            if (!link) return ""
            if (link.startsWith("http")) {
                return link;
            } else {
                if (!link.startsWith("/")) link = "/" + link;
                return `${process.env.VUE_APP_API_URL}/images/users${link}`;
            }
        },
        processPetsLink(link) {
            if (!link) return "";
            //http://google.com/mathaus.png
            //Mathaus.png ~> http://localhost:3000/image/pets/mathaus.png
            if (link.startsWith("http")) {
                return link;
            } else {
                if (!link.startsWith("/")) link = "/" + link;
                return `${process.env.VUE_APP_API_URL}/images/pets${link}`;
            }
        },

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
        getPetPhoto(pet) {
            if (pet.petPhotos[0] && pet.petPhotos[0].photoUri)
                return this.processPetsLink(pet.petPhotos[0].photoUri);

            return "";
        },
        getPetSpecieIcon(specie) {
            return { 0: 'paw', 1: 'dog', 2: 'cat' }[specie]
        },
        getPetSexIcon(sex) {
            return { M: 'mars', F: 'venus', N: 'genderless' }[sex]
        }
    }
}


