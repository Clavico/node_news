import NewsService from "../services/newsService";
import * as HttpStatus from "http-status";

import Helper from "../infra/helper";

class NewsController {



    get(req, res) {

        NewsService.get()
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    getById(req, res) {

        const _id = req.params.id;

        NewsService.getById(_id)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    create(req, res) {

        let news = req.body;

        console.log(news);

        NewsService.create(news)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, 'Noticia cadastrada com sucesso.'))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    update(req, res) {
        const _id = req.params.id;
        let news = req.body;

        NewsService.update(_id, news)
            .then(news => Helper.sendResponse(res, HttpStatus.OK, `Noticia foi atualizada com sucesso.`))//TODO Mostrat o titulo da noticia
            .catch(error => console.error.bind(console, `Error ${error}`))
    }

    delete(req, res) {
        const _id = req.params.id;
        NewsService.delete(_id)
            .then(() => Helper.sendResponse(res, HttpStatus.OK, 'Noticia excluida com sucesso.'))
            .catch(error => console.error.bind(console, `Error ${error}`))
    }
}

export default new NewsController();