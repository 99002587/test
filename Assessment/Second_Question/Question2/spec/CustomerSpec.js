describe('To test class customer', () => {
    let cust = null;
    it('should check name is of valid format', () => {
        const cust = new customer("Soniya", "soni@gmail.com" , "11-09-2020","9677243168","700");
        expect(cust.name).toMatch("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");        
        
    });

    it('should check whether name has min 5 characters', () => {
        const cust = new customer("Soniya", "soni@gmail.com" , "11-09-2020","9677243168","700");
        expect(cust.name.length).toBe(5);
        
    });
    
    it('should check if email is of valid format', () => {
        const cust = new customer("Soniya", "soni@gmail.com" , "11-09-2020","9677243168","700");
        expect(cust.email).toMatch("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"); 
        
    });

    it('should check if phone number is valid', () => {
        const cust = new customer("Soniya", "soni@gmail.com" , "11-09-2020","9677243168","700");
        expect(cust.phone).toMatch("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"); 
        
    });

    it('should check bill amount is min 500', () => {
        const cust = new customer("Soniya", "soni@gmail.com" , "11-09-2020","9677243168","700");
       expect(cust.billAmount).toBeGreaterThan(500);
        
    });

    it('should check if bill date is not more than one month old', () => {
        const cust = new customer("Soniya", "soni@gmail.com" , "11-09-2020","9677243168","700");
        let date = cust.billDate;
        let x = getDate(date)-1;
        let y = (x-1)*60 * 60 * 1000*24*30;
        let z = 60 * 60 * 1000*24*30;
        expect(y).toBeLesserThan(z);        
        
    });
    
});


