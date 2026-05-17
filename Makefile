# Burn — простые команды запуска (без backend: в MVP только браузерное приложение)
#
# Первый раз:  make setup
# Запуск:      make start
# Остановка:   make stop   (или Ctrl+C в окне, где запущен make start)

SHELL := /bin/bash
.PHONY: help setup start stop restart status test build check-node backend frontend

PORT ?= 5173
HOST ?= localhost
BASE_URL := http://$(HOST):$(PORT)
# Локальный Node (если есть папка .node-local из bootstrap)
ifneq (,$(wildcard .node-local/bin/npm))
export PATH := $(CURDIR)/.node-local/bin:$(PATH)
endif

NPM := $(shell command -v npm 2>/dev/null)

help:
	@echo ""
	@echo "  Burn — команды"
	@echo "  ─────────────────────────────────────────"
	@echo "  make setup    — первичная установка (один раз)"
	@echo "  make start    — то же, что make frontend"
	@echo "  make frontend — запустить приложение + ссылки"
	@echo "  make backend  — (в MVP нет сервера; см. пояснение)"
	@echo "  make stop     — остановить сервер разработки"
	@echo "  make restart  — перезапуск"
	@echo "  make status   — работает ли сервер сейчас"
	@echo "  make test     — проверить формулы (автотесты)"
	@echo "  make build    — собрать версию для публикации"
	@echo ""
	@echo "  Backend в этой версии нет — только frontend в браузере."
	@echo ""

check-node:
	@if [ -z "$(NPM)" ]; then \
		echo "Ошибка: не найден npm. Установите Node.js: https://nodejs.org/"; \
		exit 1; \
	fi

backend:
	@echo ""
	@echo "  В первой версии Burn нет backend (отдельного сервера)."
	@echo "  Все данные хранятся в браузере на вашем устройстве."
	@echo ""
	@echo "  Запуск приложения:  make frontend   или   make start"
	@echo "  Проверка статуса:   make status"
	@echo ""

frontend: start

setup: check-node
	@echo "→ Устанавливаю зависимости (npm install)…"
	npm install
	@echo "✓ Готово. Дальше: make start"

start: check-node
	@if [ ! -d node_modules ]; then $(MAKE) setup; fi
	@$(MAKE) stop >/dev/null 2>&1 || true
	@echo ""
	@echo "  ╔══════════════════════════════════════════════════════╗"
	@echo "  ║  Burn — откройте в браузере (frontend)               ║"
	@echo "  ╠══════════════════════════════════════════════════════╣"
	@echo "  ║  Сегодня:      $(BASE_URL)/"
	@echo "  ║  Онбординг:    $(BASE_URL)/onboarding"
	@echo "  ║  Неделя:       $(BASE_URL)/week"
	@echo "  ║  Активность:   $(BASE_URL)/activity"
	@echo "  ║  Настройки:    $(BASE_URL)/settings"
	@echo "  ╠══════════════════════════════════════════════════════╣"
	@echo "  ║  Остановка: Ctrl+C здесь  или  make stop             ║"
	@echo "  ╚══════════════════════════════════════════════════════╝"
	@echo ""
	npm run dev -- --host $(HOST) --port $(PORT)

stop:
	@pids=$$(lsof -ti:$(PORT) 2>/dev/null); \
	if [ -n "$$pids" ]; then \
		echo "→ Освобождаю порт $(PORT)…"; \
		echo "$$pids" | xargs kill 2>/dev/null || true; \
	fi
	@echo "✓ Сервер остановлен (если был запущен)."

restart: stop
	@$(MAKE) start

status:
	@if lsof -ti:$(PORT) >/dev/null 2>&1; then \
		echo "✓ Сервер работает: $(BASE_URL)"; \
		echo "  Сегодня:    $(BASE_URL)/"; \
		echo "  Онбординг:  $(BASE_URL)/onboarding"; \
		echo "  Неделя:     $(BASE_URL)/week"; \
		echo "  Активность: $(BASE_URL)/activity"; \
		echo "  Настройки:  $(BASE_URL)/settings"; \
	else \
		echo "○ Сервер не запущен. Запуск: make start"; \
	fi

test: check-node
	@if [ ! -d node_modules ]; then $(MAKE) setup; fi
	npm run test

build: check-node
	@if [ ! -d node_modules ]; then $(MAKE) setup; fi
	npm run build
	@echo "✓ Собрано в папку dist/"
