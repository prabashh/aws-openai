# -*- coding: utf-8 -*-
"""Module exceptions.py"""

import boto3
import openai
from openai_api.common.const import OpenAIResponseCodes


rekognition_client = boto3.client("rekognition")

EXCEPTION_MAP = {
    openai.APIError: (OpenAIResponseCodes.HTTP_RESPONSE_BAD_REQUEST, "BadRequest"),
    ValueError: (OpenAIResponseCodes.HTTP_RESPONSE_BAD_REQUEST, "BadRequest"),
    TypeError: (OpenAIResponseCodes.HTTP_RESPONSE_BAD_REQUEST, "BadRequest"),
    NotImplementedError: (OpenAIResponseCodes.HTTP_RESPONSE_BAD_REQUEST, "BadRequest"),
    openai.OpenAIError: (OpenAIResponseCodes.HTTP_RESPONSE_INTERNAL_SERVER_ERROR, "InternalServerError"),
    Exception: (OpenAIResponseCodes.HTTP_RESPONSE_INTERNAL_SERVER_ERROR, "InternalServerError"),
}


class OpenAIAPIConfigurationError(Exception):
    """Exception raised for errors in the configuration."""

    def __init__(self, message):
        self.message = message
        super().__init__(self.message)


class OpenAIAPIValueError(Exception):
    """Exception raised for errors in the configuration."""

    def __init__(self, message):
        self.message = message
        super().__init__(self.message)


class OpenAIAPIIlligalInvocationError(Exception):
    """Exception raised when the service is called by an unknown service."""

    def __init__(self, message):
        self.message = message
        super().__init__(self.message)
