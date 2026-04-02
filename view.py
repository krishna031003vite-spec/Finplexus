from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactSerializer
from .models import Contact
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')
class ContactView(APIView):

    # ── Fetch all contacts (used by React dashboard) ──
    def get(self, request):
        contacts = Contact.objects.all().order_by('-submitted_at')
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)

    # ── Save new contact from contact form ──
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Message received successfully!"},
                status=status.HTTP_201_CREATED
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )