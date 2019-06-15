import { observable, decorate, action } from 'mobx';

class GlobalStore {
    // User
    user = {
        username: '',
        email: '',
        thumbnail: '',
        userID: '',
    };
    updateUser = (updated) => this.user = updated;

    // Pets 'Aquarium', 'Bird', 'Fluffy', 'Reptile'
    aquarium = [];
    bird = [];
    fluffy = [];
    reptile = [];
    initAquarium = list => this.aquarium = list;
    initBird = list => this.bird = list;
    initFluffy = list => this.fluffy = list;  
}