import { createStore } from 'vuex'
import modulesServices from "./modules/modulesServices";

const debug = 'production' !== process.env.NODE_ENV;
export default function () {
    const Store = createStore({
        modules: {
            services: modulesServices

        }
    })
    return Store
}