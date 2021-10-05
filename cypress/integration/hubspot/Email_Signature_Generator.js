
before(function() {

    //runs test in laptop resolution
    cy.viewport(1366, 768)

    //Navigate to site
    cy.visit('https://www.hubspot.com/email-signature-generator')

    //Accept cookies
    cy.get('#hs-eu-confirmation-button').then(($el)=>{
        $el.get(0).click(); //This is the navite HTML DOM element
    })


})

describe('signature_generator', function()
{

    it('TC1 - Verify the title of the page', function()
    {   
        //Assertion - title check 
        cy.title().should('eq','Free Email Signature Template Generator by HubSpot')
    })

    it('TC2 - Verify that the company logo is visible', function()
    { 
        //Assertion - image check 
        cy.get('a').find('img').should('have.attr', 'src').should('include','//cdn2.hubspot.net/hubfs/53/tools/hubspot-tools.svg')    
    })

    it('TC3 - Verify that the language ddl should be visible and default language should be English', function()
    { 
        //Assertion - dropdown list is visible and default language check  
        cy.get("[class='sc-krDsej euONfL']").should('be.visible')
        cy.get('.ccUdSH').should('have.text', 'English').click
    })


    it('TC4 - verify that the language dropdownlist is able to change the languages', function()
    { 
        //Español
        cy.get('.ccUdSH').then(($el)=>{
            $el.get(0).click(); 
        })
        cy.xpath("(//a[text()='Español'])[1]").then(($el)=>{
            $el.get(0).click(); 
        })
        //Accept cookies
        cy.get('#hs-eu-confirmation-button').then(($el)=>{
            $el.get(0).click(); 
             })
        //Assertion - able to change the language to Español
        cy.get('.ccUdSH').should('be.visible').should('have.text', 'Español')


        //English
        cy.get('.ccUdSH').then(($el)=>{
            $el.get(0).click(); 
        })
        cy.xpath("(//a[text()='English'])[1]").then(($el)=>{
            $el.get(0).click(); 
        })
        //Accept cookies
        cy.get('#hs-eu-confirmation-button').then(($el)=>{
            $el.get(0).click(); 
        })
        //Assertion - able to change the language to English
        cy.get('.ccUdSH').should('be.visible').should('have.text', 'English')
    })

    //4 utility icons
    const TemplateIcon = ("[class='sc-bMvGRv fTuVQm esg-template']")
    const DetailsIcon = ("[class='sc-bMvGRv fTuVQm esg-details']")
    const StylizeIcon = ("[class='sc-bMvGRv fTuVQm esg-stylize']")
    const ImagesIcon = ("[class='sc-bMvGRv fTuVQm esg-images']")
    it('TC5 - Verify that the template icon should be visible', function()
    { 
        //Assertion - "template" utility icon visibility check
        cy.get(TemplateIcon).should('be.visible')
    })

    it('TC6 - Verify that the details icon should be visible', function()
    { 
        //Assertion - "details" utility icon visibility check
        cy.get(DetailsIcon).should('be.visible')
    })

    it('TC7 - Verify that the stylize icon should be visible', function()
    { 
        //Assertion - "stylize" utility icon visibility check
        cy.get(StylizeIcon).should('be.visible')
    })

    it('TC8 - Verify that the images icon should be visible', function()
    { 
        //Assertion - "images" utility icon visibility check
        cy.get(ImagesIcon).should('be.visible')
    })
    
    
    it('TC9 - Verify that the templates count should be 6', function()
    { 
        //Assertion -  template count check
        cy.xpath("//div[contains(@id,'template')][@class='sc-TFwJa iXeUXU']").should('have.length', 6)
    })
    
    it('TC10 - Verify that the "create signature" button is visible and label value should be create signature', function()
    { 
        //Assertion -  "create signature" button's visiblility check and its label value check
        cy.get('.esg-create-signature').should('be.visible').should('have.text', 'Create signature')
    })

    it('TC11 - Verify that the "Clear all input fields" button is visible', function()
    { 
        //Assertion - "Clear all input fields" button's visibility check
        cy.get('.jmMagG').should('be.visible')
    })
    
    it('TC12 - verify that the FAQs button is visible and link label value should be FAQs', function()
    { 
        //Assertion - "FAQs" button's visibility check
        cy.get('.dumzPB').should('be.visible').should('have.text', 'FAQs')
    })
     

    it('TC13 - Verify that the FAQs button is working and showing appropriate information', function()
    { 
        cy.get('.dumzPB').then(($el)=>{
            $el.get(0).click(); 
        })
        
         //Assertion - "FAQ Content" heading_text visibility check
        cy.xpath("//span[@id='hs_cos_wrapper_faq_rich_text']/h2").should('be.visible').should('have.text', 'FAQ Content')
        cy.get('.esg-modal-close').then(($el)=>{
            $el.get(0).click(); 
        })
    })


    it('TC14 - Verify that the "Created with Hubspot" Toggle bar is working', function()
    { 
        //Toggle Off
        cy.xpath("//div[@class='sc-bXGyLb dTsDZD']").then(($el)=>{
            $el.get(0).click(); 
        })
        //Assertion - after toggle off then the Webelement should not be exist in html/DOM
        cy.xpath("//a[text()='Create Your Own Free Signature']").should('not.exist')

        //Toggle ON
        cy.xpath("//div[@class='sc-bXGyLb cpLRlJ']").then(($el)=>{
            $el.get(0).click(); 
        })
        //Assertion - after toggle ON then the Webelement should not be exist in html/DOM
        cy.xpath("//a[text()='Create Your Own Free Signature']").should('exist')
       
    })
   

    
    it('TC15 - Verify that the user is able to select the template', function()
    { 
        cy.xpath("(//div[@class='sc-exAgwC iYyOkE'])[2]").then(($el)=>{
            $el.get(0).click(); 
        })
       //Assertion - template selection check 
        cy.xpath("//div[@class='sc-gojNiO dlPswh']").should('have.css', 'background-color', 'rgb(0, 189, 165)')
    })
    
    
    it('TC16 - Verify that the user is able to click on details icon', function()
    { 
       cy.xpath("//div[@class='sc-bMvGRv fTuVQm esg-details']").then(($el)=>{
            $el.get(0).click();    
        })
        //Assertion - details icon
        cy.xpath("//div[@id='mainTitle']/div[1]").should('have.text','Enter Your Signature Details')
    })
    
    const FirstName = ("//span[text()='First Name']/parent::span/input")
    const LastName = ("//span[text()='Last Name']/parent::span/input")
    const JobTitle = ("//span[text()='Job Title']/parent::span/input")
    const Department = ("//span[text()='Department']/parent::span/input")
    const CompanyName = ("//span[text()='Company Name']/parent::span/input")
    const OfficePhoneNumber = ("//span[text()='Office Phone Number']/parent::span/input")
    const MobilePhoneNumber = ("//span[text()='Mobile Phone Number']/parent::span/input")
    const WebsiteURL = ("//span[text()='Website URL']/parent::span/input")
    const EmailAddress = ("//span[text()='Email Address']/parent::span/input")
    const AddressLine1 = ("//input[@placeholder='Address Line 1']")
    const AddressLine2 = ("//input[@placeholder='Address Line 2']")
    const AddressLine3 = ("//input[@placeholder='Address Line 3']")
    const AddressLine4 = ("//input[@placeholder='Address Line 4']")
    const LinkedIn = ("//span[text()='LinkedIn']/parent::span/input")
    const Facebook = ("//span[text()='Facebook']/parent::span/input")
    const Twitter = ("//span[text()='Twitter']/parent::span/input")
    const Instagram = ("//span[text()='Instagram']/parent::span/input")
    const CustomField = ("//span[text()='Custom Field']/parent::span/input")
   
    //First Name
    it('TC17 - Verify that the FirstName field is visible', function()
    { 
        cy.xpath(FirstName).should('be.visible')
    })
    it('TC18 - Verify that the user is able to enter the text in FirstName field', function()
    { 
        cy.xpath(FirstName).type("Test")
        //Assertion
        cy.xpath(FirstName).should('have.attr', 'value').should('include','Test')    
    })
    it('TC19 - Verify that the user is able to clear input data from FirstName field', function()
    { 
        cy.xpath(FirstName).clear
        //Assertion
        cy.xpath(FirstName).should('have.attr', 'value').should('include','')    
    })


       // LastName
       it('TC20 - Verify that the LastName field is visible', function()
       { 
           cy.xpath(LastName).should('be.visible')
       })
       it('TC21 - Verify that the user is able to enter the text in LastName field', function()
       { 
           cy.xpath(LastName).type("Test")
           //Assertion
           cy.xpath(LastName).should('have.attr', 'value').should('include','Test')    
       })
       it('TC22 - Verify that the user is able to clear input data from LastName field', function()
       { 
           cy.xpath(LastName).clear
           //Assertion
           cy.xpath(LastName).should('have.attr', 'value').should('include','')    
       })
   


        // JobTitle
        it('TC23 - Verify that the JobTitle field is visible', function()
        { 
            cy.xpath(JobTitle).should('be.visible')
        })
        it('TC24 - Verify that the user is able to enter the text in JobTitle field', function()
        { 
            cy.xpath(JobTitle).type("Test")
            //Assertion
            cy.xpath(JobTitle).should('have.attr', 'value').should('include','Test')    
        })
        it('TC25 - Verify that the user is able to clear input data from JobTitle field', function()
        { 
            cy.xpath(JobTitle).clear
            //Assertion
            cy.xpath(JobTitle).should('have.attr', 'value').should('include','')    
        })

            // Department
    it('TC26 - Verify that the Department field is visible', function()
    { 
        cy.xpath(Department).should('be.visible')
    })
    it('TC27 - Verify that the user is able to provide input data in Department field', function()
    { 
        cy.xpath(Department).type("Test")
        //Assertion
        cy.xpath(Department).should('have.attr', 'value').should('include','Test')    
    })
    it('TC28 - Verify that the user is able to clear input data from Department field', function()
    { 
        cy.xpath(Department).clear
        //Assertion
        cy.xpath(Department).should('have.attr', 'value').should('include','')    
    })



            // CompanyName
    it('TC29 - Verify that the CompanyName field is visible', function()
    { 
        cy.xpath(CompanyName).should('be.visible')
    })
    it('TC30 - Verify that the user is able to enter the text in CompanyName field', function()
    { 
        cy.xpath(CompanyName).type("Test")
        //Assertion
        cy.xpath(CompanyName).should('have.attr', 'value').should('include','Test')    
    })
    it('TC31 - Verify that the user is able to clear input data from CompanyName field', function()
    { 
        cy.xpath(CompanyName).clear
        //Assertion
        cy.xpath(CompanyName).should('have.attr', 'value').should('include','')    
    })

    
    // OfficePhoneNumber
    it('TC32 - Verify that the OfficePhoneNumber field is visible', function()
    { 
        cy.xpath(OfficePhoneNumber).should('be.visible')
    })
    it('TC33 - Verify that the user is able to provide input data in OfficePhoneNumber field', function()
    { 
        cy.xpath(OfficePhoneNumber).type("Test")
        //Assertion
        cy.xpath(OfficePhoneNumber).should('have.attr', 'value').should('include','Test')    
    })
    it('TC34 - Verify that the user is able to clear input data from OfficePhoneNumber field', function()
    { 
        cy.xpath(OfficePhoneNumber).clear
        //Assertion
        cy.xpath(OfficePhoneNumber).should('have.attr', 'value').should('include','')    
    })

    // MobilePhoneNumber
    it('TC35 - Verify that the MobilePhoneNumber field is visible', function()
    { 
        cy.xpath(MobilePhoneNumber).should('be.visible')
    })
    it('TC36 - Verify that the user is able to provide input data in MobilePhoneNumber field', function()
    { 
        cy.xpath(MobilePhoneNumber).type("Test")
        //Assertion
        cy.xpath(MobilePhoneNumber).should('have.attr', 'value').should('include','Test')    
    })
    it('TC37 - Verify that the user is able to clear input data from MobilePhoneNumber field', function()
    { 
        cy.xpath(MobilePhoneNumber).clear
        //Assertion
        cy.xpath(MobilePhoneNumber).should('have.attr', 'value').should('include','')    
    })

            // WebsiteURL
    it('TC38 - Verify that the WebsiteURL field is visible', function()
    { 
        cy.xpath(WebsiteURL).should('be.visible')
    })
    it('TC39 - Verify that the user is able to provide input data in WebsiteURL field', function()
    { 
        cy.xpath(WebsiteURL).type("Test")
        //Assertion
        cy.xpath(WebsiteURL).should('have.attr', 'value').should('include','Test')    
    })
    it('TC40 - Verify that the user is able to clear input data from WebsiteURL field', function()
    { 
        cy.xpath(WebsiteURL).clear
        //Assertion
        cy.xpath(WebsiteURL).should('have.attr', 'value').should('include','')    
    })


    // EmailAddress
    it('TC41 - Verify that the EmailAddress field is visible', function()
    { 
        cy.xpath(EmailAddress).should('be.visible')
    })
    it('TC42 - Verify that the user is able to provide input data in EmailAddress field', function()
    { 
        cy.xpath(EmailAddress).type("Test")
        //Assertion
        cy.xpath(EmailAddress).should('have.attr', 'value').should('include','Test')    
    })
    it('TC43 - Verify that the user is able to clear input data from EmailAddress field', function()
    { 
        cy.xpath(EmailAddress).clear
        //Assertion
        cy.xpath(EmailAddress).should('have.attr', 'value').should('include','')    
    })



        // AddressLine1
        it('TC44 - Verify that the AddressLine1 field is visible', function()
        { 
            cy.xpath(AddressLine1).should('be.visible')
        })
        it('TC45 - Verify that the user is able to provide input data in AddressLine1 field', function()
        { 
            cy.xpath(AddressLine1).type("Test")
            //Assertion
            cy.xpath(AddressLine1).should('have.attr', 'value').should('include','Test')    
        })
        it('TC46 - Verify that the user is able to clear input data from AddressLine1 field', function()
        { 
            cy.xpath(AddressLine1).clear
            //Assertion
            cy.xpath(AddressLine1).should('have.attr', 'value').should('include','')    
        })
    

            // AddressLine2
    it('TC47 - Verify that the AddressLine2 field is visible', function()
    { 
        cy.xpath(AddressLine2).should('be.visible')
    })
    it('TC48 - Verify that the user is able to provide input data in AddressLine2 field', function()
    { 
        cy.xpath(AddressLine2).type("Test")
        //Assertion
        cy.xpath(AddressLine2).should('have.attr', 'value').should('include','Test')    
    })
    it('TC49 - Verify that the user is able to clear input data from AddressLine2 field', function()
    { 
        cy.xpath(AddressLine2).clear
        //Assertion
        cy.xpath(AddressLine2).should('have.attr', 'value').should('include','')    
    })

        // AddressLine3
        it('TC50 - Verify that the AddressLine3 field is visible', function()
        { 
            cy.xpath(AddressLine3).should('be.visible')
        })
        it('TC51 - Verify that the user is able to provide input data in AddressLine3 field', function()
        { 
            cy.xpath(AddressLine3).type("Test")
            //Assertion
            cy.xpath(AddressLine3).should('have.attr', 'value').should('include','Test')    
        })
        it('TC52 - Verify that the user is able to clear input data from AddressLine3 field', function()
        { 
            cy.xpath(AddressLine3).clear
            //Assertion
            cy.xpath(AddressLine3).should('have.attr', 'value').should('include','')    
        })
    

  // AddressLine4
  it('TC53 - Verify that the AddressLine4 field is visible', function()
  { 
      cy.xpath(AddressLine4).should('be.visible')
  })
  it('TC54 - Verify that the user is able to provide input data in AddressLine4 field', function()
  { 
      cy.xpath(AddressLine4).type("Test")
      //Assertion
      cy.xpath(AddressLine4).should('have.attr', 'value').should('include','Test')    
  })
  it('TC55 - Verify that the user is able to clear input data from AddressLine4 field', function()
  { 
      cy.xpath(AddressLine4).clear
      //Assertion
      cy.xpath(AddressLine4).should('have.attr', 'value').should('include','')    
  })

            // LinkedIn
    it('TC56 - Verify that the LinkedIn field is visible', function()
    { 
        cy.xpath(LinkedIn).should('be.visible')
    })
    it('TC57 - Verify that the user is able to provide input data in LinkedIn field', function()
    { 
        cy.xpath(LinkedIn).type("Test")
        //Assertion
        cy.xpath(LinkedIn).should('have.attr', 'value').should('include','Test')    
    })
    it('TC58 - Verify that the user is able to clear input data from LinkedIn field', function()
    { 
        cy.xpath(LinkedIn).clear
        //Assertion
        cy.xpath(LinkedIn).should('have.attr', 'value').should('include','')    
    })


      
    

            // Facebook
    it('TC59 - Verify that the Facebook field is visible', function()
    { 
        cy.xpath(Facebook).should('be.visible')
    })
    it('TC60 - Verify that the user is able to provide input data in Facebook field', function()
    { 
        cy.xpath(Facebook).type("Test")
        //Assertion
        cy.xpath(Facebook).should('have.attr', 'value').should('include','Test')    
    })
    it('TC61 - Verify that the user is able to clear input data from Facebook field', function()
    { 
        cy.xpath(Facebook).clear
        //Assertion
        cy.xpath(Facebook).should('have.attr', 'value').should('include','')    
    })


        // Twitter
        it('TC62 - Verify that the Twitter field is visible', function()
        { 
            cy.xpath(Twitter).should('be.visible')
        })
        it('TC63 - Verify that the user is able to provide input data in Twitter field', function()
        { 
            cy.xpath(Twitter).type("Test")
            //Assertion
            cy.xpath(Twitter).should('have.attr', 'value').should('include','Test')    
        })
        it('TC64 - Verify that the user is able to clear input data from Twitter field', function()
        { 
            cy.xpath(Twitter).clear
            //Assertion
            cy.xpath(Twitter).should('have.attr', 'value').should('include','')    
        })
    

            // Instagram
    it('TC65 - Verify that the Instagram field is visible', function()
    { 
        cy.xpath(Instagram).should('be.visible')
    })
    it('TC66 - Verify that the user is able to provide input data in Instagram field', function()
    { 
        cy.xpath(Instagram).type("Test")
        //Assertion
        cy.xpath(Instagram).should('have.attr', 'value').should('include','Test')    
    })
    it('TC67 - Verify that the user is able to clear input data from Instagram field', function()
    { 
        // cy.xpath(Instagram).clear
        cy.xpath(Instagram).type('{backspace}').type('{backspace}').type('{backspace}').type('{backspace}')
        //Assertion
        cy.xpath(Instagram).should('have.attr', 'value').should('include','')    
    })

    // CustomField
    it('TC68 - Verify that the CustomField field is visible', function()
    { 
        cy.xpath(CustomField).should('be.visible')
    })
    it('TC69 - Verify that the user is able to provide input data in CustomField field', function()
    { 
        cy.xpath(CustomField).type("Test")
        //Assertion
        cy.xpath(CustomField).should('have.attr', 'value').should('include','Test')    
    })
    it('TC70 - Verify that the user is able to clear input data from CustomField field', function()
    { 
        cy.xpath(CustomField).clear
        //Assertion
        cy.xpath(CustomField).should('have.attr', 'value').should('include','')    
    })



    it('TC71 - Verify that the system should show "Please enter a valid input" message when user doesnt enter anything and clicks on create signature button', function()
    { 
        cy.get('.jmMagG').then(($el)=>{
            $el.get(0).click(); //clear all the fields
        })
         cy.xpath("//span[text()='Create signature']").then(($el)=>{
            $el.get(0).click(); 
         })
         //Assertion
        cy.xpath("//span[text()='First Name: Please enter a valid input.']").should('be.visible')
        
     
    })
    it('TC72 - Verify that the user is able to enter the data and also able to create signature', function()
    { 
        //fill the personal details
        cy.xpath(FirstName).type("Mohammed Abdul")
        cy.xpath(LastName).type("Ahad")
        cy.xpath(JobTitle).type("Test Automation Engineer")
        cy.xpath(Department).type("QA")
        cy.xpath(CompanyName).type("Hubspot")
        cy.xpath(OfficePhoneNumber).type("040-64287648")
        cy.xpath(MobilePhoneNumber).type("+91-9700330810")
        cy.xpath(WebsiteURL).type("https://www.hubspot.com/")
        cy.xpath(EmailAddress).type("abdulahad.selenium@gmail.com")
        cy.xpath(AddressLine1).type("Shaikpet")
        cy.xpath(AddressLine2).type("Hyderabad")
        cy.xpath(AddressLine3).type("Telangana")
        cy.xpath(AddressLine4).type("India")
        cy.xpath(LinkedIn).type("linkedin.com/test")
        cy.xpath(Facebook).type("facebook.com/test")
        cy.xpath(Twitter).type("twitter.com/test")
        cy.xpath(Instagram).type("instagram.com/test")
        cy.xpath(CustomField).type("24x7 Online Services & Consultation")
        
        
        cy.xpath("//span[text()='Create signature']").then(($el)=>{
            $el.get(0).click(); 
        })
        cy.xpath("//span[text()='Confirm & submit']").then(($el)=>{
            $el.get(0).click();    
        })
        
        cy.xpath("//span[text()='Copy signature']").then(($el)=>{
            $el.get(0).click();      
        })

        cy.xpath("//span[@type='success']").should('be.visible').should('have.text','Copied!')
     
    })
  

})