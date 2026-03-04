from rest_framework import generics, permissions
from .models import Task
from .serializers import TaskSerializer


class TaskListCreateView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Task.objects.filter(owner=self.request.user)

        # Filter by priority
        priority = self.request.query_params.get('priority')
        if priority:
            queryset = queryset.filter(priority=priority)

        # Filter by completed status
        completed = self.request.query_params.get('completed')
        if completed:
            queryset = queryset.filter(completed=completed.lower() == 'true')

        # Filter by due date
        due_before = self.request.query_params.get('due_before')
        if due_before:
            queryset = queryset.filter(due_date__date__lte=due_before)

        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user)