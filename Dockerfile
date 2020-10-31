FROM archlinux:latest

RUN \
	pacman -Syyu --needed --noconfirm \
	&& pacman -S go base-devel git gtk3 webkit2gtk --needed --noconfirm

COPY . /app

RUN \
	chmod +x ./app/entrypoint.sh \
	&& cd app && make

CMD ["/bin/bash"]