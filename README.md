# Docker Prac Images 

-   Backend Image: [here](https://hub.docker.com/r/minibrusp/prac-docker-backend)
-   Frontend Image: [here](https://hub.docker.com/r/minibrusp/prac-docker-frontend)


### some notes that is only for me to see but save it here bec im in a hurry 



--------------------------------------------------------------------
docker build -t acct/prac-docker-frontend
docker push acct/prac-docker-frontend

----------------------------

running container with some volumes 

docker run --name docker_prac_backend_nodemon -p 4000:4000 --rm -v "C:\Apache24\htdocs\prac-docker\backend:/app" -v "/app/node_modules" docker-prac-backend

----------------------------------

docker run --name docker_prac_frontend_vite -p 5173:5173 --rm -v "C:\Apache24\htdocs\prac-docker\frontend:/app" -v "/app/node_modules" docker-prac-frontend

-------------------------------------

docker run --name docker_prac_frontend_vite -p 5173:5173 --rm docker-prac-frontend

------------------------------------

docker-compose up || docker-compose down