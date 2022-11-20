import axios from "axios";
import MockAdapter from "axios-mock-adapter"

import {addBug} from "../bug"
import configure from "../configure"
describe("bugsSliec", () => {

    let fakeAxios;
    let store;
    beforeEach(()=>{
         store =configure();
         fakeAxios =new MockAdapter(axios);

    })

    it("should handle addbug action ", async ()=>{
        // arrange 
        const bug= {description:"a"};
        const savedBug={...bug,id:1}
        fakeAxios.onPost('/bugs').reply(200,savedBug)
        // act
        await   store.dispatch(addBug(bug))

        // assert
        expect(store.getState().entities.bugs.list).toContainEqual(savedBug)    
        })
})