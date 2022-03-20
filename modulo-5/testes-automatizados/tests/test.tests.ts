import {User, performPurchase} from '../src/index'

    describe("testes automatizados", () => {


        test("Testing balance greater than value", () => {
            const user: User = {
                name: "larissa",
                balance: 200
            }
        
            const result = performPurchase(user, 40)
            
            expect(result).toEqual({
                name: "larissa",
                balance: 60
            })
        })

        test("Testing balance greater than value", () => {
            const user: User = {
                name: "sill",
                balance: 50
            }
        
            const result = performPurchase(user, 50)
            
            expect(result).toEqual({
                ...user,
                balance: 0
            })
        })
        
        test("Testing balance greater than value", () => {
            const user: User = {
                name: "lariss",
                balance: 30
            }
        
            const result = performPurchase(user, 50)
            
            expect(result).not.toBeDefined()
        })

    })



