import os
import environ

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

env = environ.Env(
    ALLOWED_HOSTS=(list, ["localhost", "127.0.0.1"]),
    DEBUG=(bool, False),
    SECRET_KEY=(str, "c@=r0r#!=q0nm8qndx)@!c3cks-wfgfqf*ph0zadd9x*fsr603"),
    CORS_ORIGIN_WHITELIST=(
        list,
        [
            "http://localhost:4200",
            "http://127.0.0.1:4200",
        ],
    ),
    CORS_ORIGIN_ALLOW_ALL=(bool, False),
    DATABASE_URL=(str, "sqlite:///" + os.path.join(BASE_DIR, "db.sqlite3")),
    SECURE_SSL_REDIRECT=(bool, True),
)
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "2kn&79*6xe(_^yuldges081^lh-5i4!#p7_t)^mphq)fl*29i!"

# SECURITY WARNING: don't run with debug turned on in production!

ALLOWED_HOSTS = env("ALLOWED_HOSTS")
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOWED_ORIGINS = env("CORS_ORIGIN_WHITELIST")
CORS_ORIGIN_WHITELIST = env("CORS_ORIGIN_WHITELIST")
DEBUG = env("DEBUG")
SECRET_KEY = env("SECRET_KEY")
SECURE_SSL_REDIRECT = env("SECURE_SSL_REDIRECT")

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # apps
    "mapsowit.apps.MapsowitConfig",
    "django_extensions",
    "rest_framework",
    "corsheaders",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "api.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "api.wsgi.application"


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {"default": env.db()}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = "/static/"
