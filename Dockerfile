# Build the static site with Zola.
# Usage:
#   docker build -t viitamaki-site .
#   docker run --rm -v "$PWD/public:/site/public" viitamaki-site   # build -> ./public
#   docker run --rm -p 1111:1111 viitamaki-site \
#       serve --interface 0.0.0.0 --port 1111 --base-url localhost   # local preview
FROM ghcr.io/getzola/zola:v0.22.1

WORKDIR /site
COPY . /site

# Default command produces the static site into /site/public.
ENTRYPOINT ["/bin/zola"]
CMD ["build"]
