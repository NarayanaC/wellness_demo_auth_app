from django.http import Http404

from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import ListModelMixin
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status

from .models import Todo
from .serializers import TodoSerializer


class PingViewSet(GenericViewSet, ListModelMixin):
    """
    Helpful class for internal health checks
    for when your server deploys. Typical of AWS
    applications behind ALB which does default 30
    second ping/health checks.
    """
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        return Response(
            data={"id": request.GET.get("id")},
            status=status.HTTP_200_OK
        )

class TodoList(APIView):
    """
    List all Todo, or create a new Todo.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TodoDetail(APIView):
    """
    Retrieve, update or delete a todo instance.
    """
    permission_classes = [IsAuthenticated]
    
    def get_object(self, pk):
        try:
            return Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        todo = self.get_object(pk)
        serializer = TodoSerializer(todo)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        todo = self.get_object(pk)
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        todo = self.get_object(pk)
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)