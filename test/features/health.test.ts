
// @ts-ignore
import supertest from 'supertest'
import {StatusCodes,} from 'http-status-codes';
import app from "../../src/App";

describe('Health', () => {

    it('should happy path', async () => {
        const response =  await supertest(app)
            .get('/health')
            .set('Accept', 'application/json')
            .expect(StatusCodes.OK)

        expect(response.body).toBeDefined();
        expect(response.body).toEqual({status: "OK"});
    })
})
