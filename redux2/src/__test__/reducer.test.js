import reducer from '../reducers';

describe('Reducer Testing',() => {
    it('Should return initial state',() => {
        expect(JSON.stringify(reducer(undefined,{})))
        .toEqual(JSON.stringify({
            article:{},
            gallery:{}
        }))
    })
    it('Reducer with action',() => {
        let state={
            article:[],
            gallery:[]
        }

        state= reducer(state,{action:'GET_LATEST'})

        expect(state).toEqual({
            article:[],
            gallery:[]
        })
    })
})