FROM 10.0.6.215:5000/lma-cypress:latest

#installing chrome and pnpm
ADD chrome.sh .
RUN sed -i 's/\r$//' ./chrome.sh && bash ./chrome.sh && rm ./chrome.sh

CMD bash