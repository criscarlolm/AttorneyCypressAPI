FROM cypress/base:16.3.0

#add user jenkins
RUN useradd -ms /bin/bash  jenkins

#update the system
RUN apt-get update

#installing other items
ADD install.sh .
RUN sed -i 's/\r$//' ./install.sh && bash ./install.sh && rm ./install.sh

CMD bash