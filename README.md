Github URL: https://github.com/rajeshprabhu1003/portfolio

Working of my portfolio - 
1. When you open the app after hosting using ng-serve, you'll get a home screen with a short intro section.
2. There you'll have two choices. One to view my personal info and the other to view my professional info.
3. Even when you go inside of it, you'll have tabs to switch to either of the sections.
4. The app has 3 routing urls, 
    a. the opening page route,
    b. personal-info page route,
    c. professional-info page route
5. All the routes except the mentioned about will re-direct to the opening page of my portfolio.
6. Only font-awesome icons library is used to display specific icons, other than that no other library is used.
7. The app is not yet responsive although that will be a work of the future.

Hierarchy of my portfolio - 

    AppComponent
        |
        |----------- HomeComponent              / /It will display the opening intro screen
        |
        |----------- PersonalComponent          // It will display all the personal information of my portfolio
        |
        |----------- ProfessionalComponent      // It will display all the professional information of my portfolio
    
    Also there is a service used, AppService. It is used to stop loading the opening screen animation when the user comes from either of the section.
