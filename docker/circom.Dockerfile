FROM node:16-alpine as node

FROM rustlang/rust:nightly-alpine3.15 as circom_compiler

RUN apk add --no-cache git musl-dev
RUN git clone https://github.com/iden3/circom.git
RUN cd circom && \
  cargo build --release

FROM rustlang/rust:nightly-alpine3.15

RUN apk add --no-cache git musl-dev

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

COPY --from=circom_compiler circom circom

RUN cd circom && \
  cargo install --path circom