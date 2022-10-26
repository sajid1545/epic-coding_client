#### App Title ---

# Epic! Coding

## Live Site

(https://assignment-10-epic-coding.firebaseapp.com/ “Epic! Coding”)

#

1. This is an online education platform app for those who are interested in tech.

2. In this app there are bunch of courses from which users can select their desired course..Users can see the name of instructor, ratings, picture and many more details.

3. In this app the checkout page is protected, unless the user is signedIn, user can not view content of checkout page.Checkout page will contain details about the course user purchased

4. In this app user can sign in by Google , Github and by using email. User must register first with email and password if he/she wish to sign in using email.

5. Signed in user can see there profile picture in the top right corner of the navbar. While hovering over it username can be seen. While registering user can add a profile picture and update its name.

6. User can now reset their password by clicking forget password. User can view their password while typing now for both login and register form.

7. Register form is validated. User must use 6 characters long password and have a special character in it.

8. Dark mode toggle button added. User can toggle between dark and light mode.This feature is only available for navbar.

9. In userProfile page user can change display name and profile picture.After changing users name, user profile user should reload the page to see the updated data.This is small bug, I am still working on it.

#

## Packages and Technologies used (Client Side)

1. Taiwind CSS , daisyui (Taiwind component library)
2. React router dom to route through components
3. React (JS library)
4. rect-to-pdf --> so that user can download course details in PDF format
5. react-magnify-image ---> to zoom through the images (course images)
6. react-hot-toast ---> to show a toast (success / error) when user signedIn or loggedOut
7. sweet-alert-2 ---> instead of normal alert, sweet alert is used make an alert box more attractive and easier to design
8. react-icons --> used as it is easier to work with
9. react-loader-spinner --> more fancier than normal ones and easily customizable
10. firebase-authentication ---> firebase allows users to register or login to the app
11. react-awesome-slider ---> for a fancy slider
12. react-leaflet ---> for using maps
13. react-scroll-to-top ---> scroll to the top of the page

#

## Packages and Technologies used (Server Side)

1. Nodemon --> to monitor changes while updating
2. Express js (Node js framework)
3. Cors --> supports data transfer between servers
