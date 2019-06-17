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
    initReptile = list => this.reptile = list;
    updateAquariumCount = (update, idx) => this.aquarium[idx].count = update; 
    updateBirdCount = (update, idx) => this.bird[idx].count = update;
    updateFluffyCount = (update, idx) => this.fluffy[idx].count = update;
    updateReptileCount = (update, idx) => this.reptile[idx].count = update; 
}

decorate(
    GlobalStore,
    {
        user: observable,
        aquarium: observable,
        bird: observable,
        fluffy: observable,
        reptile: observable,
        updateUser: action,
        initAquarium: action,
        initBird: action,
        initFluffy: action,
        initReptile: action,
        updateAquariumCount: action,
        updateBirdCount: action,
        updateFluffyCount: action,
        updateReptileCount: action,
    }
);

export default new GlobalStore();