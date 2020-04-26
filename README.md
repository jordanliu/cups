<p align="center">
</p>
<h1 align="center">
  CUPS
</h1>

CIT3009: Advanced Programming Group Project - built with MERN by Racquel Bailey (1701406), Tarique Jemison (1703228) and Jordan Liu (1506757).
<br>

## Project Description

1.  **Overview**

    **Title:** Enabling Services for the Disabled: A Cup of Uplifting Coffee (C.U.P) <br><br>
    Cups is a local coffee shop that provides a relaxing getaway in the middle of the city for the disabled community. They are also a wonderful example of a [Social Enterprise Boost Initiative ](https://www.micaf.gov.jm/msme-initiatives/`social-enterprise-boost-initiative-sebi)
    similar to [DeafCan coffee](https://www.deafcancoffee.com/). Kat, the manager, has been encouraged by her mentor to establish another store at
    95 Moolean Avenue in the heart of Montego Bay. Kat would like to encourage an empowering environment through self service. Your consulting team providing pro bono services has
    considered to incorporate Artificial Intelligence through Computer Vision and Speech Processing to accomplish this. The touch-screen self service kiosk will allow customers to
    order their favourite treats and verify using their Digital Id.

    Group Lead: Jordan Liu<br>
    Integration Lead: Jordan Liu

2.  **Resources**

    Link to [ERD](https://gitlab.com/jordanxliu/cups/blob/master/design/CUPS_ERD.pdf) <br>
    Link to [Wireframe](https://gitlab.com/jordanxliu/cups/blob/master/design/CUPS_WIREFRAME.pdf) <br>
    Link to [Project Charter](https://drive.google.com/open?id=1Tp3Zqfjc2klFwmkhTNpndEzlTV93ZHWy) <br>
    Link to [Manual](https://drive.google.com/open?id=1C6-Gc3WuNNyER66571hHuXsyQ2OH1KVj) <br>
    Link to [Demo Video](https://youtu.be/BdBmjmrWqVQ) <br>
    Link to [Code Review Video](https://youtu.be/OvFA_5_JNbI) <br>

    Live Demo: [http://138.197.77.172:8080/](http://138.197.77.172:8080/) - to access the manager's portal, add a "/portal", [http://138.197.77.172:8080/portal](http://138.197.77.172:8080/portal), access the docs with [http://138.197.77.172:8080/docs](http://138.197.77.172:8080/docs)
    <br>

## Quick start

1.  **Start developing.**

    Navigate into the project’s directory and install the dependencies.

    ```shell
    cd client
    npm i
    cd ..
    npm i
    ```

2.  **Environmental Variables.**

    Navigate into the client's directory and create a .env file.

    ```shell
    REACT_APP_API_URL=http://localhost:8080 //api url
    ```

    Navigate into the root directory and create a .env file.

    ```shell
    PORT=8080 //api port
    API_URL=http://localhost:8080 //api url
    MONGODB_URI=YOUR_MONGODB_URL //mongodb uri

    ```

3.  **Start up the app!**

    Navigate into the project root directory and start the script.

    ```shell
    npm run dev //runs client and server concurrently
    npm run client //runs client only
    npm run server //runs server only
    ```

4.  **Open the source code and start editing!**

    Your client is now running at `http://localhost:3000`! <br>
