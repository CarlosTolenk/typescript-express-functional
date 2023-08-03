
// @ts-ignore
import supertest from 'supertest'
import {StatusCodes,} from 'http-status-codes';
import app from "../../src/App";

describe('Liveness', () => {

    it('should happy path', async () => {
       const response =  await supertest(app)
            .get('/liveness')
            .set('Accept', 'application/json')
            .expect(StatusCodes.OK)

        expect(response.body).toBeDefined();
        expect(response.body).toEqual('We are alive')
    })
})
