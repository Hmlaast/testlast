FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/Hmlaast/testlast.git /workidr/
WORKDIR /workidr/
RUN npm install
CMD ["node", "index.js"]
